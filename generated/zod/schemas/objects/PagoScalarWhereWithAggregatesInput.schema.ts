import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const pagoscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PagoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PagoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PagoScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PagoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PagoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  metodoPago: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  monto: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  pedidoId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const PagoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PagoScalarWhereWithAggregatesInput> = pagoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PagoScalarWhereWithAggregatesInput>;
export const PagoScalarWhereWithAggregatesInputObjectZodSchema = pagoscalarwherewithaggregatesinputSchema;
