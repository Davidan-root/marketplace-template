import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  carritoId: z.bigint()
}).strict();
export const CarritoItemCreateManyPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateManyPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateManyPublicacionInput>;
export const CarritoItemCreateManyPublicacionInputObjectZodSchema = makeSchema();
