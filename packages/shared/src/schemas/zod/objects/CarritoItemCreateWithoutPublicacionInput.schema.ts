import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoCreateNestedOneWithoutCarritoItemsInputObjectSchema as CarritoCreateNestedOneWithoutCarritoItemsInputObjectSchema } from './CarritoCreateNestedOneWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  carrito: z.lazy(() => CarritoCreateNestedOneWithoutCarritoItemsInputObjectSchema)
}).strict();
export const CarritoItemCreateWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateWithoutPublicacionInput>;
export const CarritoItemCreateWithoutPublicacionInputObjectZodSchema = makeSchema();
