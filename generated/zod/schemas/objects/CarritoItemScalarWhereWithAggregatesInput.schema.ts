import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const carritoitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CarritoItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CarritoItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CarritoItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CarritoItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CarritoItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  cantidadCI: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  carritoId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  publicacionId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const CarritoItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CarritoItemScalarWhereWithAggregatesInput> = carritoitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CarritoItemScalarWhereWithAggregatesInput>;
export const CarritoItemScalarWhereWithAggregatesInputObjectZodSchema = carritoitemscalarwherewithaggregatesinputSchema;
