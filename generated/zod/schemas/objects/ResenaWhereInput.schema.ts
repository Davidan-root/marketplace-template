import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { ProductoScalarRelationFilterObjectSchema as ProductoScalarRelationFilterObjectSchema } from './ProductoScalarRelationFilter.schema';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema'

const resenawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResenaWhereInputObjectSchema), z.lazy(() => ResenaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResenaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResenaWhereInputObjectSchema), z.lazy(() => ResenaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  comentario: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  puntaje: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  producto: z.union([z.lazy(() => ProductoScalarRelationFilterObjectSchema), z.lazy(() => ProductoWhereInputObjectSchema)]).optional()
}).strict();
export const ResenaWhereInputObjectSchema: z.ZodType<Prisma.ResenaWhereInput> = resenawhereinputSchema as unknown as z.ZodType<Prisma.ResenaWhereInput>;
export const ResenaWhereInputObjectZodSchema = resenawhereinputSchema;
