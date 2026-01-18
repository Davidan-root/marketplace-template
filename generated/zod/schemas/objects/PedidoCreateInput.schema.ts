import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateNestedOneWithoutPedidosInputObjectSchema as UsuarioCreateNestedOneWithoutPedidosInputObjectSchema } from './UsuarioCreateNestedOneWithoutPedidosInput.schema';
import { PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema as PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema } from './PedidoItemCreateNestedManyWithoutPedidoInput.schema';
import { PagoCreateNestedManyWithoutPedidoInputObjectSchema as PagoCreateNestedManyWithoutPedidoInputObjectSchema } from './PagoCreateNestedManyWithoutPedidoInput.schema';
import { EnvioCreateNestedOneWithoutPedidoInputObjectSchema as EnvioCreateNestedOneWithoutPedidoInputObjectSchema } from './EnvioCreateNestedOneWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutPedidosInputObjectSchema),
  pedidoItems: z.lazy(() => PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioCreateNestedOneWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoCreateInputObjectSchema: z.ZodType<Prisma.PedidoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateInput>;
export const PedidoCreateInputObjectZodSchema = makeSchema();
