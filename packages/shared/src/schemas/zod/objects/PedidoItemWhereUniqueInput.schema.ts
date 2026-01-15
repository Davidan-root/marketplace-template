import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const PedidoItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.PedidoItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemWhereUniqueInput>;
export const PedidoItemWhereUniqueInputObjectZodSchema = makeSchema();
