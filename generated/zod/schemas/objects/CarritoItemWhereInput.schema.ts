import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { CarritoScalarRelationFilterObjectSchema as CarritoScalarRelationFilterObjectSchema } from './CarritoScalarRelationFilter.schema';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './CarritoWhereInput.schema';
import { PublicacionScalarRelationFilterObjectSchema as PublicacionScalarRelationFilterObjectSchema } from './PublicacionScalarRelationFilter.schema';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema'

const carritoitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CarritoItemWhereInputObjectSchema), z.lazy(() => CarritoItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CarritoItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CarritoItemWhereInputObjectSchema), z.lazy(() => CarritoItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  cantidadCI: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  carritoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  publicacionId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  carrito: z.union([z.lazy(() => CarritoScalarRelationFilterObjectSchema), z.lazy(() => CarritoWhereInputObjectSchema)]).optional(),
  publicacion: z.union([z.lazy(() => PublicacionScalarRelationFilterObjectSchema), z.lazy(() => PublicacionWhereInputObjectSchema)]).optional()
}).strict();
export const CarritoItemWhereInputObjectSchema: z.ZodType<Prisma.CarritoItemWhereInput> = carritoitemwhereinputSchema as unknown as z.ZodType<Prisma.CarritoItemWhereInput>;
export const CarritoItemWhereInputObjectZodSchema = carritoitemwhereinputSchema;
