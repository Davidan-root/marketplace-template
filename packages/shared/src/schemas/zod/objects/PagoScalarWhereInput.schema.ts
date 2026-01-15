import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const pagoscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PagoScalarWhereInputObjectSchema), z.lazy(() => PagoScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PagoScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PagoScalarWhereInputObjectSchema), z.lazy(() => PagoScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  metodoPago: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  monto: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  pedidoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const PagoScalarWhereInputObjectSchema: z.ZodType<Prisma.PagoScalarWhereInput> = pagoscalarwhereinputSchema as unknown as z.ZodType<Prisma.PagoScalarWhereInput>;
export const PagoScalarWhereInputObjectZodSchema = pagoscalarwhereinputSchema;
