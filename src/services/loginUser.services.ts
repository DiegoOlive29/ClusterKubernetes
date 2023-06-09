import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { IloginRequest } from "../interfaces/login.interfaces";
import {compare} from 'bcryptjs'

import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { decode } from "punycode";
import { AppError } from "../errors/appError";

const createLoginService= async ({email,password}:IloginRequest): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email:email
    })
    
    if(!user){
        throw new AppError('Invalid User or password',401)
    }
    const passwordMatch = await compare(password,user.password)

    if(!passwordMatch){
        throw new AppError('Invalid User or password',401)
    }

    const token = jwt.sign(
        {
            userId : user.id,
          
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: '24h',
            subject: user.id
        }
    )
    return token    
}
export default createLoginService