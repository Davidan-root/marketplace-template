import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { VendedorListRelationFilterObjectSchema as VendedorListRelationFilterObjectSchema } from './VendedorListRelationFilter.schema'

const estadovendedorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EstadoVendedorWhereInputObjectSchema), z.lazy(() => EstadoVendedorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EstadoVendedorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EstadoVendedorWhereInputObjectSchema), z.lazy(() => EstadoVendedorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  descripcionEV: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nombreEV: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vendedores: z.lazy(() => VendedorListRelationFilterObjectSchema).optional()
}).strict();
export const EstadoVendedorWhereInputObjectSchema: z.ZodType<Prisma.EstadoVendedorWhereInput> = estadovendedorwhereinputSchema as unknown as z.ZodType<Prisma.EstadoVendedorWhereInput>;
export const EstadoVendedorWhereInputObjectZodSchema = estadovendedorwhereinputSchema;
