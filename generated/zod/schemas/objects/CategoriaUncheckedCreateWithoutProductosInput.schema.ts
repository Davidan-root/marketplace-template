import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionCategoria: z.string(),
  nombreCategoria: z.string()
}).strict();
export const CategoriaUncheckedCreateWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriaUncheckedCreateWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUncheckedCreateWithoutProductosInput>;
export const CategoriaUncheckedCreateWithoutProductosInputObjectZodSchema = makeSchema();
