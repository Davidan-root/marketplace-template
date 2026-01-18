import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoUsuarioArgsObjectSchema as EstadoUsuarioArgsObjectSchema } from './EstadoUsuarioArgs.schema';
import { VendedorArgsObjectSchema as VendedorArgsObjectSchema } from './VendedorArgs.schema';
import { CarritoFindManySchema as CarritoFindManySchema } from '../findManyCarrito.schema';
import { PedidoFindManySchema as PedidoFindManySchema } from '../findManyPedido.schema';
import { UsuarioCountOutputTypeArgsObjectSchema as UsuarioCountOutputTypeArgsObjectSchema } from './UsuarioCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  estadoUsuario: z.union([z.boolean(), z.lazy(() => EstadoUsuarioArgsObjectSchema)]).optional(),
  vendedor: z.union([z.boolean(), z.lazy(() => VendedorArgsObjectSchema)]).optional(),
  carritos: z.union([z.boolean(), z.lazy(() => CarritoFindManySchema)]).optional(),
  pedidos: z.union([z.boolean(), z.lazy(() => PedidoFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UsuarioIncludeObjectSchema: z.ZodType<Prisma.UsuarioInclude> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioInclude>;
export const UsuarioIncludeObjectZodSchema = makeSchema();
