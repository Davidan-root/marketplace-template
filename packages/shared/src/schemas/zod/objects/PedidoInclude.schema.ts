import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './UsuarioArgs.schema';
import { PedidoItemFindManySchema as PedidoItemFindManySchema } from '../findManyPedidoItem.schema';
import { PagoFindManySchema as PagoFindManySchema } from '../findManyPago.schema';
import { EnvioArgsObjectSchema as EnvioArgsObjectSchema } from './EnvioArgs.schema';
import { PedidoCountOutputTypeArgsObjectSchema as PedidoCountOutputTypeArgsObjectSchema } from './PedidoCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
  pedidoItems: z.union([z.boolean(), z.lazy(() => PedidoItemFindManySchema)]).optional(),
  pagos: z.union([z.boolean(), z.lazy(() => PagoFindManySchema)]).optional(),
  envio: z.union([z.boolean(), z.lazy(() => EnvioArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PedidoCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PedidoIncludeObjectSchema: z.ZodType<Prisma.PedidoInclude> = makeSchema() as unknown as z.ZodType<Prisma.PedidoInclude>;
export const PedidoIncludeObjectZodSchema = makeSchema();
