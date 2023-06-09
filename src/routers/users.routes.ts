import { Router } from 'express';
import { createUserController, updateUserController,deleteUserControler,listUserControler} from '../controllers/user.controllers';
import tokenAuthMiddleware from '../middlewares/ensureAuth.middleware';

const userRouters = Router()
userRouters.post('',createUserController)
userRouters.get('',listUserControler)
userRouters.patch('/:id',updateUserController)
userRouters.delete('/:id', deleteUserControler)

export default userRouters

