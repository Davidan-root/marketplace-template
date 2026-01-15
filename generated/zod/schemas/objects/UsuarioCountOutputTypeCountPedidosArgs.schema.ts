import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereInputObjectSchema).optional()
}).strict();
export const UsuarioCountOutputTypeCountPedidosArgsObjectSchema = makeSchema();
export const UsuarioCountOutputTypeCountPedidosArgsObjectZodSchema = makeSchema();
