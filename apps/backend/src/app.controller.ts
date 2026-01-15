import { Controller, Get, Post, Body } from '@nestjs/common';
import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { UsuarioUncheckedCreateInputObjectSchema } from '../../../generated/zod/schemas';
import { AppService } from './app.service';

class UsuarioCreateDto {
  static zodSchema = UsuarioUncheckedCreateInputObjectSchema;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('usuarios')
  createUsuario(@Body(ZodValidationPipe) data: UsuarioCreateDto): { message: string; data: any; } {
    return this.appService.createUsuario(data);
  }
}
