import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioCreateNestedOneWithoutPedidosInputObjectSchema as UsuarioCreateNestedOneWithoutPedidosInputObjectSchema } from './UsuarioCreateNestedOneWithoutPedidosInput.schema';
import { PagoCreateNestedManyWithoutPedidoInputObjectSchema as PagoCreateNestedManyWithoutPedidoInputObjectSchema } from './PagoCreateNestedManyWithoutPedidoInput.schema';
import { EnvioCreateNestedOneWithoutPedidoInputObjectSchema as EnvioCreateNestedOneWithoutPedidoInputObjectSchema } from './EnvioCreateNestedOneWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutPedidosInputObjectSchema),
  pagos: z.lazy(() => PagoCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioCreateNestedOneWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoCreateWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PedidoCreateWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateWithoutPedidoItemsInput>;
export const PedidoCreateWithoutPedidoItemsInputObjectZodSchema = makeSchema();
