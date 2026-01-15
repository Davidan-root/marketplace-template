import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const publicacionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PublicacionScalarWhereInputObjectSchema), z.lazy(() => PublicacionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PublicacionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PublicacionScalarWhereInputObjectSchema), z.lazy(() => PublicacionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  condicionesVenta: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  enviosVenta: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  precioVenta: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  stockVenta: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  vendedorId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  productoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const PublicacionScalarWhereInputObjectSchema: z.ZodType<Prisma.PublicacionScalarWhereInput> = publicacionscalarwhereinputSchema as unknown as z.ZodType<Prisma.PublicacionScalarWhereInput>;
export const PublicacionScalarWhereInputObjectZodSchema = publicacionscalarwhereinputSchema;
