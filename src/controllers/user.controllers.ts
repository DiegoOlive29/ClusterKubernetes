import { Request, Response } from "express";
import {
  IuserRequest,
  IuserUpdateRequest,
} from "../interfaces/users.interfaces";
import createUserService from "../services/createUser.services";
import updateUserService from "../services/updateUser.services";
import deleteUserService from "../services/deleteuser.services";
import listUserService from "../services/listUser.services";
const createUserController = async (req: Request, res: Response) => {
  const user: IuserRequest = req.body;
  const createdUser = await createUserService(user);
  return res.json(createdUser);
};
const updateUserController = async (req: Request, res: Response) => {
  const user: IuserUpdateRequest = req.body;
  const id: string = req.params.id;
  const updatedUser = await updateUserService(user, id);
  return res.json(updatedUser);
};
const deleteUserControler = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteUserService(id);
  return res.status(204).send();
};
const listUserControler = async (req:Request, res: Response)=>{
  const listUser= await listUserService()

  return res.json(listUser)
}

export { createUserController, updateUserController, deleteUserControler,listUserControler };
