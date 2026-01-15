import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const estadovendedorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EstadoVendedorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EstadoVendedorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EstadoVendedorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EstadoVendedorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EstadoVendedorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  descripcionEV: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nombreEV: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const EstadoVendedorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EstadoVendedorScalarWhereWithAggregatesInput> = estadovendedorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EstadoVendedorScalarWhereWithAggregatesInput>;
export const EstadoVendedorScalarWhereWithAggregatesInputObjectZodSchema = estadovendedorscalarwherewithaggregatesinputSchema;
