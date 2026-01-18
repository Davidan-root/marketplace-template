import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  carritoId: z.bigint()
}).strict();
export const CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemUncheckedCreateWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUncheckedCreateWithoutPublicacionInput>;
export const CarritoItemUncheckedCreateWithoutPublicacionInputObjectZodSchema = makeSchema();
