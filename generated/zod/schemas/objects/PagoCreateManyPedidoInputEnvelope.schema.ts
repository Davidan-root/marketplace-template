import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoCreateManyPedidoInputObjectSchema as PagoCreateManyPedidoInputObjectSchema } from './PagoCreateManyPedidoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PagoCreateManyPedidoInputObjectSchema), z.lazy(() => PagoCreateManyPedidoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PagoCreateManyPedidoInputEnvelopeObjectSchema: z.ZodType<Prisma.PagoCreateManyPedidoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PagoCreateManyPedidoInputEnvelope>;
export const PagoCreateManyPedidoInputEnvelopeObjectZodSchema = makeSchema();
