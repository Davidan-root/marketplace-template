import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoArgsObjectSchema as PedidoArgsObjectSchema } from './PedidoArgs.schema';
import { PublicacionArgsObjectSchema as PublicacionArgsObjectSchema } from './PublicacionArgs.schema'

const makeSchema = () => z.object({
  pedido: z.union([z.boolean(), z.lazy(() => PedidoArgsObjectSchema)]).optional(),
  publicacion: z.union([z.boolean(), z.lazy(() => PublicacionArgsObjectSchema)]).optional()
}).strict();
export const PedidoItemIncludeObjectSchema: z.ZodType<Prisma.PedidoItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemInclude>;
export const PedidoItemIncludeObjectZodSchema = makeSchema();
