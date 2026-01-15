import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UsuarioScalarRelationFilterObjectSchema as UsuarioScalarRelationFilterObjectSchema } from './UsuarioScalarRelationFilter.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { CarritoItemListRelationFilterObjectSchema as CarritoItemListRelationFilterObjectSchema } from './CarritoItemListRelationFilter.schema'

const carritowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CarritoWhereInputObjectSchema), z.lazy(() => CarritoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CarritoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CarritoWhereInputObjectSchema), z.lazy(() => CarritoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  fechaHoraBaja: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  fechaHoraModificacion: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  usuarioId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  usuario: z.union([z.lazy(() => UsuarioScalarRelationFilterObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema)]).optional(),
  carritoItems: z.lazy(() => CarritoItemListRelationFilterObjectSchema).optional()
}).strict();
export const CarritoWhereInputObjectSchema: z.ZodType<Prisma.CarritoWhereInput> = carritowhereinputSchema as unknown as z.ZodType<Prisma.CarritoWhereInput>;
export const CarritoWhereInputObjectZodSchema = carritowhereinputSchema;
