import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const CategoriaWhereUniqueInputObjectSchema: z.ZodType<Prisma.CategoriaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaWhereUniqueInput>;
export const CategoriaWhereUniqueInputObjectZodSchema = makeSchema();
