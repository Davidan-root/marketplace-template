import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  carritoId: z.bigint(),
  publicacionId: z.bigint()
}).strict();
export const CarritoItemCreateManyInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateManyInput>;
export const CarritoItemCreateManyInputObjectZodSchema = makeSchema();
