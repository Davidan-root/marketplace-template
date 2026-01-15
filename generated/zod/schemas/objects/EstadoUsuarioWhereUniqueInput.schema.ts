import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const EstadoUsuarioWhereUniqueInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioWhereUniqueInput>;
export const EstadoUsuarioWhereUniqueInputObjectZodSchema = makeSchema();
