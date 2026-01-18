import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => VendedorWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => VendedorWhereInputObjectSchema).optional()
}).strict();
export const VendedorScalarRelationFilterObjectSchema: z.ZodType<Prisma.VendedorScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VendedorScalarRelationFilter>;
export const VendedorScalarRelationFilterObjectZodSchema = makeSchema();
