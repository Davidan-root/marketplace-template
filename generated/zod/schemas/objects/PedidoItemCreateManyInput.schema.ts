import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  pedidoId: z.bigint(),
  publicacionId: z.bigint()
}).strict();
export const PedidoItemCreateManyInputObjectSchema: z.ZodType<Prisma.PedidoItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateManyInput>;
export const PedidoItemCreateManyInputObjectZodSchema = makeSchema();
