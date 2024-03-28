import { Request, Response } from "express";
import { UserService } from "../service/UserService";
import PasswordValidator from "password-validator";
import AppError from "../../../shared/errors/AppErrors";
import { compare, hash } from "bcrypt";
import { GenerateTokenProvider } from "../../../shared/provider/GenerateTokenProvider";

class UserController {
   async authenticate(req: Request, res: Response): Promise<Response> {
      const { email, password } = req.body;

      const schema = new PasswordValidator();
      schema
         .is()
         .min(8)
         .is()
         .max(100)
         .has()
         .uppercase()
         .has()
         .lowercase()
         .has()
         .digits(2)
         .has()
         .not()
         .spaces()
         .is()
         .not()
         .oneOf(["Passw0rd", "Password123", "1234568"]);
      if (schema.validate(password)) {
         throw new AppError("Email or password incorrect", 401);
      }
      const userService = new UserService();
      const verifyUser = await userService.findEmail({ email });
      console.log(verifyUser);
      if (!verifyUser) {
         throw new AppError("Email or password incorrect", 401);
      }

      const passwordMatch = await compare(password, verifyUser.password);

      if (!passwordMatch) {
         throw new AppError("Email or password incorrect", 401);
      }
      const generateTokenProvider = new GenerateTokenProvider();

      const token = await generateTokenProvider.execute(verifyUser.id);

      const tokenReturn = {
         token,
         user: { name: verifyUser.name },
      };

      return res.status(200).json(tokenReturn);
   }

   public async create(req: Request, res: Response): Promise<Response> {
      const { name, email, password } = req.body;

      const schema = new PasswordValidator();
      schema
         .is()
         .min(8)
         .is()
         .max(100)
         .has()
         .uppercase()
         .has()
         .lowercase()
         .has()
         .digits(2)
         .has()
         .not()
         .spaces()
         .is()
         .not()
         .oneOf(["Passw0rd", "Password123", "1234568"]);
      if (schema.validate(password)) {
         throw new AppError("Email or password incorrect", 400);
      }

      const userService = new UserService();
      const verifyUser = await userService.findEmail({ email });
      if (verifyUser) {
         throw new AppError("Email has registred", 400);
      }

      const passwordHash = await hash(password, 8);

      const data = await userService.create({
         name,
         email,
         password: passwordHash,
      });

      return res.status(201).json(data);
   }

   public async findId(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;

      const userService = new UserService();
      const data = await userService.findId({ id });

      return res.status(200).json(data);
   }

   public async findMy(req: Request, res: Response): Promise<Response> {
      const { id } = req.user;

      const userService = new UserService();
      const data = await userService.findId({ id });

      return res.status(200).json(data);
   }

   public async findEmail(req: Request, res: Response): Promise<Response> {
      const { email } = req.params;

      const userService = new UserService();
      const data = await userService.findEmail({ email });

      return res.status(200).json(data);
   }

   public async update(req: Request, res: Response): Promise<Response> {
      const { id } = req.user;
      const { name, email, password } = req.body;

      const userService = new UserService();
      const data = await userService.update({ id, name, email });

      return res.status(200).json(data);
   }

   public async updatePassword(req: Request, res: Response): Promise<Response> {
      const { id } = req.user;
      const { password } = req.body;

      const schema = new PasswordValidator();

      schema
         .is()
         .min(8)
         .is()
         .max(100)
         .has()
         .uppercase()
         .has()
         .lowercase()
         .has()
         .digits(2)
         .has()
         .not()
         .spaces()
         .is()
         .not()
         .oneOf(["Passw0rd", "Password123", "1234568"]);
      if (schema.validate(password || "")) {
         throw new AppError("Email or password incorrect", 400);
      }

      const passwordHash = await hash(password, 8);

      const userService = new UserService();
      const data = await userService.updatePassword({
         id,
         password: passwordHash,
      });

      return res.status(200).json(data);
   }
}

export { UserController };
