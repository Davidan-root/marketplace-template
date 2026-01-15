import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  direccionUsuario: z.string(),
  email: z.string(),
  nombreUsuario: z.string(),
  numeroContacto: z.string(),
  passwordHash: z.string()
}).strict();
export const UsuarioCreateManyEstadoUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioCreateManyEstadoUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateManyEstadoUsuarioInput>;
export const UsuarioCreateManyEstadoUsuarioInputObjectZodSchema = makeSchema();
