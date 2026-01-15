import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  email: z.string().optional()
}).strict();
export const UsuarioWhereUniqueInputObjectSchema: z.ZodType<Prisma.UsuarioWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioWhereUniqueInput>;
export const UsuarioWhereUniqueInputObjectZodSchema = makeSchema();
