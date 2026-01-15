import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemCreateManyPublicacionInputObjectSchema as PedidoItemCreateManyPublicacionInputObjectSchema } from './PedidoItemCreateManyPublicacionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PedidoItemCreateManyPublicacionInputObjectSchema), z.lazy(() => PedidoItemCreateManyPublicacionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PedidoItemCreateManyPublicacionInputEnvelopeObjectSchema: z.ZodType<Prisma.PedidoItemCreateManyPublicacionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateManyPublicacionInputEnvelope>;
export const PedidoItemCreateManyPublicacionInputEnvelopeObjectZodSchema = makeSchema();
