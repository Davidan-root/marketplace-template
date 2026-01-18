import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  publicacionId: z.bigint()
}).strict();
export const CarritoItemCreateManyCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateManyCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateManyCarritoInput>;
export const CarritoItemCreateManyCarritoInputObjectZodSchema = makeSchema();
