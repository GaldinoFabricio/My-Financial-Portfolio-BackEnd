import { Request, Response } from "express";
import { UserService } from "../service/UserService";

class UserController {
   public async create(req: Request, res: Response): Promise<Response> {
      const { name, email, password } = req.body;

      const userService = new UserService();
      const data = await userService.create({ name, email, password });

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
      const { id } = req.params;
      const { name, email, password } = req.body;

      const userService = new UserService();
      const data = await userService.update({ id, name, email, password });

      return res.status(200).json(data);
   }

   public async updatePassword(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
      const { password } = req.body;

      const userService = new UserService();
      const data = await userService.updatePassword({ id, password });

      return res.status(200).json(data);
   }
}

export { UserController };
