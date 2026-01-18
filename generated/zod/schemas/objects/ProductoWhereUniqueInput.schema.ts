import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const ProductoWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductoWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoWhereUniqueInput>;
export const ProductoWhereUniqueInputObjectZodSchema = makeSchema();
