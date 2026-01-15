import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  carritoId: z.bigint(),
  publicacionId: z.bigint()
}).strict();
export const CarritoItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CarritoItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUncheckedCreateInput>;
export const CarritoItemUncheckedCreateInputObjectZodSchema = makeSchema();
