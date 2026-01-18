import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './UsuarioArgs.schema';
import { PedidoItemFindManySchema as PedidoItemFindManySchema } from '../findManyPedidoItem.schema';
import { PagoFindManySchema as PagoFindManySchema } from '../findManyPago.schema';
import { EnvioArgsObjectSchema as EnvioArgsObjectSchema } from './EnvioArgs.schema';
import { PedidoCountOutputTypeArgsObjectSchema as PedidoCountOutputTypeArgsObjectSchema } from './PedidoCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  fechaHoraAlta: z.boolean().optional(),
  numeroPedido: z.boolean().optional(),
  totalPrecio: z.boolean().optional(),
  usuarioId: z.boolean().optional(),
  usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
  pedidoItems: z.union([z.boolean(), z.lazy(() => PedidoItemFindManySchema)]).optional(),
  pagos: z.union([z.boolean(), z.lazy(() => PagoFindManySchema)]).optional(),
  envio: z.union([z.boolean(), z.lazy(() => EnvioArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PedidoCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PedidoSelectObjectSchema: z.ZodType<Prisma.PedidoSelect> = makeSchema() as unknown as z.ZodType<Prisma.PedidoSelect>;
export const PedidoSelectObjectZodSchema = makeSchema();
