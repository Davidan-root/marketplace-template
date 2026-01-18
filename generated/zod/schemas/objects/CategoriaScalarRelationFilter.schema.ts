import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from './CategoriaWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CategoriaWhereInputObjectSchema).optional()
}).strict();
export const CategoriaScalarRelationFilterObjectSchema: z.ZodType<Prisma.CategoriaScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaScalarRelationFilter>;
export const CategoriaScalarRelationFilterObjectZodSchema = makeSchema();
