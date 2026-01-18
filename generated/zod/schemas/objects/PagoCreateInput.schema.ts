import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCreateNestedOneWithoutPagosInputObjectSchema as PedidoCreateNestedOneWithoutPagosInputObjectSchema } from './PedidoCreateNestedOneWithoutPagosInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  metodoPago: z.string(),
  monto: z.number(),
  pedido: z.lazy(() => PedidoCreateNestedOneWithoutPagosInputObjectSchema)
}).strict();
export const PagoCreateInputObjectSchema: z.ZodType<Prisma.PagoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoCreateInput>;
export const PagoCreateInputObjectZodSchema = makeSchema();
