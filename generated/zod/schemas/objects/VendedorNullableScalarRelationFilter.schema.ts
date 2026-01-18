import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => VendedorWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => VendedorWhereInputObjectSchema).optional().nullable()
}).strict();
export const VendedorNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.VendedorNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VendedorNullableScalarRelationFilter>;
export const VendedorNullableScalarRelationFilterObjectZodSchema = makeSchema();
