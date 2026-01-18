import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoArgsObjectSchema as PedidoArgsObjectSchema } from './PedidoArgs.schema'

const makeSchema = () => z.object({
  pedido: z.union([z.boolean(), z.lazy(() => PedidoArgsObjectSchema)]).optional()
}).strict();
export const EnvioIncludeObjectSchema: z.ZodType<Prisma.EnvioInclude> = makeSchema() as unknown as z.ZodType<Prisma.EnvioInclude>;
export const EnvioIncludeObjectZodSchema = makeSchema();
