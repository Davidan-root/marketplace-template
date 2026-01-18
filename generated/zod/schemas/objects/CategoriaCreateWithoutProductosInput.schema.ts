import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionCategoria: z.string(),
  nombreCategoria: z.string()
}).strict();
export const CategoriaCreateWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriaCreateWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateWithoutProductosInput>;
export const CategoriaCreateWithoutProductosInputObjectZodSchema = makeSchema();
