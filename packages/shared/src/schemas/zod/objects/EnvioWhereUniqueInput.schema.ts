import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  pedidoId: z.bigint().optional()
}).strict();
export const EnvioWhereUniqueInputObjectSchema: z.ZodType<Prisma.EnvioWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioWhereUniqueInput>;
export const EnvioWhereUniqueInputObjectZodSchema = makeSchema();
