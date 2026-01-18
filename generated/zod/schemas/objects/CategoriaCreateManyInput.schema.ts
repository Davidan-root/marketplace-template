import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionCategoria: z.string(),
  nombreCategoria: z.string()
}).strict();
export const CategoriaCreateManyInputObjectSchema: z.ZodType<Prisma.CategoriaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateManyInput>;
export const CategoriaCreateManyInputObjectZodSchema = makeSchema();
