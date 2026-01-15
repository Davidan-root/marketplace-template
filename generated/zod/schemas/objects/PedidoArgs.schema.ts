import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoSelectObjectSchema as PedidoSelectObjectSchema } from './PedidoSelect.schema';
import { PedidoIncludeObjectSchema as PedidoIncludeObjectSchema } from './PedidoInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PedidoSelectObjectSchema).optional(),
  include: z.lazy(() => PedidoIncludeObjectSchema).optional()
}).strict();
export const PedidoArgsObjectSchema = makeSchema();
export const PedidoArgsObjectZodSchema = makeSchema();
