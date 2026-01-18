import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const resenascalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResenaScalarWhereInputObjectSchema), z.lazy(() => ResenaScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResenaScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResenaScalarWhereInputObjectSchema), z.lazy(() => ResenaScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  comentario: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  puntaje: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const ResenaScalarWhereInputObjectSchema: z.ZodType<Prisma.ResenaScalarWhereInput> = resenascalarwhereinputSchema as unknown as z.ZodType<Prisma.ResenaScalarWhereInput>;
export const ResenaScalarWhereInputObjectZodSchema = resenascalarwhereinputSchema;
