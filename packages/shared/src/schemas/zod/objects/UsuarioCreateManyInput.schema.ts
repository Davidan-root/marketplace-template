import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  direccionUsuario: z.string(),
  email: z.string(),
  nombreUsuario: z.string(),
  numeroContacto: z.string(),
  passwordHash: z.string(),
  estadoUsuarioId: z.bigint()
}).strict();
export const UsuarioCreateManyInputObjectSchema: z.ZodType<Prisma.UsuarioCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateManyInput>;
export const UsuarioCreateManyInputObjectZodSchema = makeSchema();
