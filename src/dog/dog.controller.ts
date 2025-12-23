import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { DogService } from './dog.service';
import type { Request, Response } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('introduce/:id')
  public introduce(@Req() request: Request, @Res() response: Response): string {
    console.log('Request Params:', request.params);
    console.log('Request Query:', request.query);
    return this.dogService.introduce();
  }

  @Get('bark/:sound')
  public bark(@Param() params: any, @Query() query: any): string {
    console.log('Request Params:', params);
    console.log('Request Query:', query);
    return this.dogService.bark();
  }

  @Post('edit')
  public modifyDog(@Body() body: any): string {
    console.log('Request Body:', body);
    return this.dogService.modifyDog(body);
  }
}
