import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEU: z.string(),
  nombreEU: z.string()
}).strict();
export const EstadoUsuarioCreateManyInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioCreateManyInput>;
export const EstadoUsuarioCreateManyInputObjectZodSchema = makeSchema();
