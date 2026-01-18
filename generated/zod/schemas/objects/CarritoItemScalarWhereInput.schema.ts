import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const carritoitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CarritoItemScalarWhereInputObjectSchema), z.lazy(() => CarritoItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CarritoItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CarritoItemScalarWhereInputObjectSchema), z.lazy(() => CarritoItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  cantidadCI: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  carritoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  publicacionId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const CarritoItemScalarWhereInputObjectSchema: z.ZodType<Prisma.CarritoItemScalarWhereInput> = carritoitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.CarritoItemScalarWhereInput>;
export const CarritoItemScalarWhereInputObjectZodSchema = carritoitemscalarwhereinputSchema;
