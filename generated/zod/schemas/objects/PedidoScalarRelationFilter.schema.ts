import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PedidoWhereInputObjectSchema).optional()
}).strict();
export const PedidoScalarRelationFilterObjectSchema: z.ZodType<Prisma.PedidoScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PedidoScalarRelationFilter>;
export const PedidoScalarRelationFilterObjectZodSchema = makeSchema();
