import { IsNotEmpty, MinLength, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    readonly username: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsNumber()
    readonly account_id: number;
}

export class LoginUserDto {

    @IsNotEmpty()
    @IsEmail()
    readonly username: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
}