import { Router } from 'express';
import { createUserController, updateUserController,deleteUserControler } from '../controllers/user.controllers';
import tokenAuthMiddleware from '../middlewares/ensureAuth.middleware';

const userRouters = Router()
userRouters.post('',createUserController)
userRouters.patch('/:id',tokenAuthMiddleware,updateUserController)
userRouters.delete('/id', tokenAuthMiddleware, deleteUserControler)

export default userRouters

