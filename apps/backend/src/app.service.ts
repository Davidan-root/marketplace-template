import { Injectable } from '@nestjs/common';
import { UsuarioUncheckedCreateInputObjectSchema } from '../../../generated/zod/schemas';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createUsuario(data: any) {
    // Aquí integrarías con Prisma para guardar en DB
    // Por ejemplo: return this.prisma.usuario.create({ data });
    return { message: 'Usuario creado', data };
  }
}
