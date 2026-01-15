import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  numeroPedido: z.number().int().optional()
}).strict();
export const PedidoWhereUniqueInputObjectSchema: z.ZodType<Prisma.PedidoWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoWhereUniqueInput>;
export const PedidoWhereUniqueInputObjectZodSchema = makeSchema();
