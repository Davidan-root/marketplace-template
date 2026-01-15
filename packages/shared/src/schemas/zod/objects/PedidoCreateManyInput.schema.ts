import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuarioId: z.bigint()
}).strict();
export const PedidoCreateManyInputObjectSchema: z.ZodType<Prisma.PedidoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateManyInput>;
export const PedidoCreateManyInputObjectZodSchema = makeSchema();
