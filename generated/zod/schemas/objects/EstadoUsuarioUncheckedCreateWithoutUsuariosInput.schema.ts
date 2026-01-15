import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEU: z.string(),
  nombreEU: z.string()
}).strict();
export const EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioUncheckedCreateWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioUncheckedCreateWithoutUsuariosInput>;
export const EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectZodSchema = makeSchema();
