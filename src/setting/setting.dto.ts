import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';
import { IsType } from 'src/validators/settings.validator';

export class CreateSettingDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsEnum(['string', 'number', 'boolean'])
    data_type: string;

    @IsNotEmpty()
    @IsType(["string", "number", "boolean"])
    value: string | number | boolean;

    @IsNotEmpty()
    @IsNumber()
    account_id: number;
}

export class DeleteSettingDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    account_id: number;
}

export class UpdateSettingDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsType(["string", "number", "boolean"])
    value: string | number | boolean;

    @IsNotEmpty()
    @IsNumber()
    account_id: number;
}