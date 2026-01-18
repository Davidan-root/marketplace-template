import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const carritoscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CarritoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CarritoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CarritoScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CarritoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CarritoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  fechaHoraBaja: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  fechaHoraModificacion: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  usuarioId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const CarritoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CarritoScalarWhereWithAggregatesInput> = carritoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CarritoScalarWhereWithAggregatesInput>;
export const CarritoScalarWhereWithAggregatesInputObjectZodSchema = carritoscalarwherewithaggregatesinputSchema;
