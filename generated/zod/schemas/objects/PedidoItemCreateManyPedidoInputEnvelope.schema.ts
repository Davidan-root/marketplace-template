import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemCreateManyPedidoInputObjectSchema as PedidoItemCreateManyPedidoInputObjectSchema } from './PedidoItemCreateManyPedidoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PedidoItemCreateManyPedidoInputObjectSchema), z.lazy(() => PedidoItemCreateManyPedidoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PedidoItemCreateManyPedidoInputEnvelopeObjectSchema: z.ZodType<Prisma.PedidoItemCreateManyPedidoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateManyPedidoInputEnvelope>;
export const PedidoItemCreateManyPedidoInputEnvelopeObjectZodSchema = makeSchema();
