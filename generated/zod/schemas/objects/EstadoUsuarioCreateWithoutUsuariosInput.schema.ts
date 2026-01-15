import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEU: z.string(),
  nombreEU: z.string()
}).strict();
export const EstadoUsuarioCreateWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioCreateWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioCreateWithoutUsuariosInput>;
export const EstadoUsuarioCreateWithoutUsuariosInputObjectZodSchema = makeSchema();
