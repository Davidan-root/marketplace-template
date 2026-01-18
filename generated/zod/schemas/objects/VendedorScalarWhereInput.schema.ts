import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const vendedorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VendedorScalarWhereInputObjectSchema), z.lazy(() => VendedorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VendedorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VendedorScalarWhereInputObjectSchema), z.lazy(() => VendedorScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  nombreTienda: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reputacion: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  usuarioId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  estadoVendedorId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const VendedorScalarWhereInputObjectSchema: z.ZodType<Prisma.VendedorScalarWhereInput> = vendedorscalarwhereinputSchema as unknown as z.ZodType<Prisma.VendedorScalarWhereInput>;
export const VendedorScalarWhereInputObjectZodSchema = vendedorscalarwhereinputSchema;
