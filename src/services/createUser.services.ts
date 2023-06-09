import { IuserRequest, IuserResponse } from '../interfaces/users.interfaces';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entities';
import {hash} from 'bcryptjs'
import { AppError } from '../errors/appError';

const createUserService = async ({name,email,password} :IuserRequest): Promise<User> =>{
    const userRepository = AppDataSource.getRepository(User)
    
    if(!password){
        throw new AppError('Password is missing')
    }

    const hasedPassword = await hash(password,10)

    const user =  userRepository.create({name,email,password:hasedPassword})

    await userRepository.save(user)

    return user
}
export default createUserService