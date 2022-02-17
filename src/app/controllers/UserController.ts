import {Request, Response} from 'express'

//import User from '../schemas/Users'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.json('Hello World')
  }
}

export default new UserController()