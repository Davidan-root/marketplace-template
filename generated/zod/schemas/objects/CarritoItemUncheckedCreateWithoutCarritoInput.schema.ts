import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  publicacionId: z.bigint()
}).strict();
export const CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemUncheckedCreateWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUncheckedCreateWithoutCarritoInput>;
export const CarritoItemUncheckedCreateWithoutCarritoInputObjectZodSchema = makeSchema();
