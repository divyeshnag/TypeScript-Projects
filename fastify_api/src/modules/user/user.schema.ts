import { type } from "os"
import {z} from "zod"

const createUSerSchema = z.object({
    email : z.string({
        required_error : "Email is required",
        invalid_type_error : "Enter valid Email"
    }).email(),
    name : z.string(),
    password : z.string({
        required_error : "password is required",
        invalid_type_error : "password valid Email"
    })
})

export type CreateUserInput = z.infer<typeof createUSerSchema>;