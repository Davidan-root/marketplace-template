import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoUsuarioArgsObjectSchema as EstadoUsuarioArgsObjectSchema } from './EstadoUsuarioArgs.schema';
import { VendedorArgsObjectSchema as VendedorArgsObjectSchema } from './VendedorArgs.schema';
import { CarritoFindManySchema as CarritoFindManySchema } from '../findManyCarrito.schema';
import { PedidoFindManySchema as PedidoFindManySchema } from '../findManyPedido.schema';
import { UsuarioCountOutputTypeArgsObjectSchema as UsuarioCountOutputTypeArgsObjectSchema } from './UsuarioCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  direccionUsuario: z.boolean().optional(),
  email: z.boolean().optional(),
  nombreUsuario: z.boolean().optional(),
  numeroContacto: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  estadoUsuarioId: z.boolean().optional(),
  estadoUsuario: z.union([z.boolean(), z.lazy(() => EstadoUsuarioArgsObjectSchema)]).optional(),
  vendedor: z.union([z.boolean(), z.lazy(() => VendedorArgsObjectSchema)]).optional(),
  carritos: z.union([z.boolean(), z.lazy(() => CarritoFindManySchema)]).optional(),
  pedidos: z.union([z.boolean(), z.lazy(() => PedidoFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UsuarioSelectObjectSchema: z.ZodType<Prisma.UsuarioSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioSelect>;
export const UsuarioSelectObjectZodSchema = makeSchema();
