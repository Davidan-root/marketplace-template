import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoCountOutputTypeSelectObjectSchema as PedidoCountOutputTypeSelectObjectSchema } from './PedidoCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PedidoCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PedidoCountOutputTypeArgsObjectSchema = makeSchema();
export const PedidoCountOutputTypeArgsObjectZodSchema = makeSchema();
