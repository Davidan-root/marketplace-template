import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const vendedorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VendedorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VendedorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VendedorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VendedorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VendedorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  nombreTienda: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  reputacion: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  usuarioId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  estadoVendedorId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const VendedorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VendedorScalarWhereWithAggregatesInput> = vendedorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VendedorScalarWhereWithAggregatesInput>;
export const VendedorScalarWhereWithAggregatesInputObjectZodSchema = vendedorscalarwherewithaggregatesinputSchema;
