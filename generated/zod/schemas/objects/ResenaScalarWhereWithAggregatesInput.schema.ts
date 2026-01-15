import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const resenascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ResenaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResenaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResenaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResenaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResenaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  comentario: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  puntaje: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  productoId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const ResenaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ResenaScalarWhereWithAggregatesInput> = resenascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ResenaScalarWhereWithAggregatesInput>;
export const ResenaScalarWhereWithAggregatesInputObjectZodSchema = resenascalarwherewithaggregatesinputSchema;
