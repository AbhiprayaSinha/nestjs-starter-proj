import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Setting as SettingModel } from 'src/setting/setting.model';
import { SettingService } from 'src/setting/setting.service';
import { CreateSettingDto } from 'src/setting/setting.dto';
import { UpdateSettingDto } from 'src/setting/setting.dto';
import { DeleteSettingDto } from 'src/setting/setting.dto';

@Controller('setting')
export class SettingController {
    constructor(private readonly settingService: SettingService) { }

    @Get()
    async findAll(): Promise<SettingModel[]> {
        return await this.settingService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':account_id')
    async findOneByAccount(
        @Param('account_id', ParseIntPipe) account_id: number
    ): Promise<SettingModel[]> {
        return await this.settingService.findAllByAccount(account_id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() setting: CreateSettingDto, @Request() req): Promise<SettingModel> {
        return await this.settingService.create(setting);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch()
    async updateOneByAccountAndName(@Body() setting: UpdateSettingDto, @Request() req): Promise<SettingModel> {
        return await this.settingService.updateOneByAccountAndName(setting);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete()
    async deleteOneByAccountAndName(@Body() setting: DeleteSettingDto, @Request() req): Promise<SettingModel> {
        return await this.settingService.deleteOneByAccountAndName(setting);
    }
}