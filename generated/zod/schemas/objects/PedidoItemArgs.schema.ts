import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemSelectObjectSchema as PedidoItemSelectObjectSchema } from './PedidoItemSelect.schema';
import { PedidoItemIncludeObjectSchema as PedidoItemIncludeObjectSchema } from './PedidoItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PedidoItemSelectObjectSchema).optional(),
  include: z.lazy(() => PedidoItemIncludeObjectSchema).optional()
}).strict();
export const PedidoItemArgsObjectSchema = makeSchema();
export const PedidoItemArgsObjectZodSchema = makeSchema();
