import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoCreateManyUsuarioInputObjectSchema as PedidoCreateManyUsuarioInputObjectSchema } from './PedidoCreateManyUsuarioInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PedidoCreateManyUsuarioInputObjectSchema), z.lazy(() => PedidoCreateManyUsuarioInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PedidoCreateManyUsuarioInputEnvelopeObjectSchema: z.ZodType<Prisma.PedidoCreateManyUsuarioInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateManyUsuarioInputEnvelope>;
export const PedidoCreateManyUsuarioInputEnvelopeObjectZodSchema = makeSchema();
