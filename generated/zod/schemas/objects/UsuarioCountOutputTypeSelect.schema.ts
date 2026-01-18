import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCountOutputTypeCountCarritosArgsObjectSchema as UsuarioCountOutputTypeCountCarritosArgsObjectSchema } from './UsuarioCountOutputTypeCountCarritosArgs.schema';
import { UsuarioCountOutputTypeCountPedidosArgsObjectSchema as UsuarioCountOutputTypeCountPedidosArgsObjectSchema } from './UsuarioCountOutputTypeCountPedidosArgs.schema'

const makeSchema = () => z.object({
  carritos: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeCountCarritosArgsObjectSchema)]).optional(),
  pedidos: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeCountPedidosArgsObjectSchema)]).optional()
}).strict();
export const UsuarioCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UsuarioCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCountOutputTypeSelect>;
export const UsuarioCountOutputTypeSelectObjectZodSchema = makeSchema();
