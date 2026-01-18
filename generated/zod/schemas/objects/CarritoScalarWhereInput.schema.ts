import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const carritoscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CarritoScalarWhereInputObjectSchema), z.lazy(() => CarritoScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CarritoScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CarritoScalarWhereInputObjectSchema), z.lazy(() => CarritoScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  fechaHoraBaja: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  fechaHoraModificacion: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  usuarioId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const CarritoScalarWhereInputObjectSchema: z.ZodType<Prisma.CarritoScalarWhereInput> = carritoscalarwhereinputSchema as unknown as z.ZodType<Prisma.CarritoScalarWhereInput>;
export const CarritoScalarWhereInputObjectZodSchema = carritoscalarwhereinputSchema;
