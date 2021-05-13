import { IsString, MinLength, MaxLength, Matches } from "class-validator"

export class AuthCredentialsDto {
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    username: string

    @IsString()
    @MinLength(8)
    @MaxLength(30)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        {
            message: 'password too weak'
        }
    )
    password: string
}