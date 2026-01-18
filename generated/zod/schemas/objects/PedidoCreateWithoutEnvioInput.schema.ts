import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateNestedOneWithoutPedidosInputObjectSchema as UsuarioCreateNestedOneWithoutPedidosInputObjectSchema } from './UsuarioCreateNestedOneWithoutPedidosInput.schema';
import { PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema as PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema } from './PedidoItemCreateNestedManyWithoutPedidoInput.schema';
import { PagoCreateNestedManyWithoutPedidoInputObjectSchema as PagoCreateNestedManyWithoutPedidoInputObjectSchema } from './PagoCreateNestedManyWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutPedidosInputObjectSchema),
  pedidoItems: z.lazy(() => PedidoItemCreateNestedManyWithoutPedidoInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoCreateNestedManyWithoutPedidoInputObjectSchema).optional()
}).strict();
export const PedidoCreateWithoutEnvioInputObjectSchema: z.ZodType<Prisma.PedidoCreateWithoutEnvioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateWithoutEnvioInput>;
export const PedidoCreateWithoutEnvioInputObjectZodSchema = makeSchema();
