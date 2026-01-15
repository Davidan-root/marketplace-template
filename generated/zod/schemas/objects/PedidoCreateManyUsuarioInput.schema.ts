import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number()
}).strict();
export const PedidoCreateManyUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoCreateManyUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateManyUsuarioInput>;
export const PedidoCreateManyUsuarioInputObjectZodSchema = makeSchema();
