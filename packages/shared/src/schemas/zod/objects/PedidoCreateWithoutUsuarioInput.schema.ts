import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema as PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema } from './PedidoItemCreateNestedManyWithoutPedidoInput.schema';
import { PagoCreateNestedManyWithoutPedidoInputObjectSchema as PagoCreateNestedManyWithoutPedidoInputObjectSchema } from './PagoCreateNestedManyWithoutPedidoInput.schema';
import { EnvioCreateNestedOneWithoutPedidoInputObjectSchema as EnvioCreateNestedOneWithoutPedidoInputObjectSchema } from './EnvioCreateNestedOneWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  pedidoItems: z.lazy(() => PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioCreateNestedOneWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateWithoutUsuarioInput>;
export const PedidoCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
