import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema as PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedCreateNestedManyWithoutPedidoInput.schema';
import { PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema as PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema } from './PagoUncheckedCreateNestedManyWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuarioId: z.bigint(),
  pedidoItems: z.lazy(() => PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoUncheckedCreateWithoutEnvioInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedCreateWithoutEnvioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedCreateWithoutEnvioInput>;
export const PedidoUncheckedCreateWithoutEnvioInputObjectZodSchema = makeSchema();
