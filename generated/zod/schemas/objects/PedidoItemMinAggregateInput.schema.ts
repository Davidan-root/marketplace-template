import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cantidadPI: z.literal(true).optional(),
  precioUnitario: z.literal(true).optional(),
  subtotalPI: z.literal(true).optional(),
  pedidoId: z.literal(true).optional(),
  publicacionId: z.literal(true).optional()
}).strict();
export const PedidoItemMinAggregateInputObjectSchema: z.ZodType<Prisma.PedidoItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemMinAggregateInputType>;
export const PedidoItemMinAggregateInputObjectZodSchema = makeSchema();
