import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './PagoWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PagoWhereInputObjectSchema).optional()
}).strict();
export const PedidoCountOutputTypeCountPagosArgsObjectSchema = makeSchema();
export const PedidoCountOutputTypeCountPagosArgsObjectZodSchema = makeSchema();
