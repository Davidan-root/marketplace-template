import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema as PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedCreateNestedManyWithoutPedidoInput.schema';
import { PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema as PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema } from './PagoUncheckedCreateNestedManyWithoutPedidoInput.schema';
import { EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema as EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema } from './EnvioUncheckedCreateNestedOneWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  pedidoItems: z.lazy(() => PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoUncheckedCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedCreateWithoutUsuarioInput>;
export const PedidoUncheckedCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
