import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema as PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedCreateNestedManyWithoutPedidoInput.schema';
import { PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema as PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema } from './PagoUncheckedCreateNestedManyWithoutPedidoInput.schema';
import { EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema as EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema } from './EnvioUncheckedCreateNestedOneWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuarioId: z.bigint(),
  pedidoItems: z.lazy(() => PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioUncheckedCreateNestedOneWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedCreateInput>;
export const PedidoUncheckedCreateInputObjectZodSchema = makeSchema();
