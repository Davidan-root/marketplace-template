import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoArgsObjectSchema as PedidoArgsObjectSchema } from './PedidoArgs.schema'

const makeSchema = () => z.object({
  pedido: z.union([z.boolean(), z.lazy(() => PedidoArgsObjectSchema)]).optional()
}).strict();
export const PagoIncludeObjectSchema: z.ZodType<Prisma.PagoInclude> = makeSchema() as unknown as z.ZodType<Prisma.PagoInclude>;
export const PagoIncludeObjectZodSchema = makeSchema();
