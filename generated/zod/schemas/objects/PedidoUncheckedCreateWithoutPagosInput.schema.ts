import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema as PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedCreateNestedManyWithoutPedidoInput.schema';
import { EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema as EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema } from './EnvioUncheckedCreateNestedOneWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuarioId: z.bigint(),
  pedidoItems: z.lazy(() => PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoUncheckedCreateWithoutPagosInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedCreateWithoutPagosInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedCreateWithoutPagosInput>;
export const PedidoUncheckedCreateWithoutPagosInputObjectZodSchema = makeSchema();
