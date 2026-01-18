import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema as PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema } from './PagoUncheckedCreateNestedManyWithoutPedidoInput.schema';
import { EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema as EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema } from './EnvioUncheckedCreateNestedOneWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuarioId: z.bigint(),
  pagos: z.lazy(() => PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedCreateWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedCreateWithoutPedidoItemsInput>;
export const PedidoUncheckedCreateWithoutPedidoItemsInputObjectZodSchema = makeSchema();
