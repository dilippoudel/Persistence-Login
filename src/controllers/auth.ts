import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const database: any[] = [{ email: 'duy@gmail.com', password: 'password' }];

export const test = (req: Request, res: Response, next: NextFunction) => {
  res.send('this is auth router');
};

export const post = (req: Request, res: Response, next: NextFunction) => {
  res.send('posted');
};

export const register = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const user = { email, password };
  database.push(user);
  res.send('success');
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const token = jwt.sign({ email: email }, 'abcd');
  res.json({ token, email });
};
export const logout = (req:Request, res:Response, next: NextFunction) => {
    const token = req.body.token
    console.log(token)
}

export const getUserData = (req: any, res: Response, next: NextFunction) => {
  const user = req.user;
  const email = user.email;
  res.json({ email });
};

export const findByEmail = (email: string) => {
  const user = database.find(user => user.email === email);
  return user;
};
