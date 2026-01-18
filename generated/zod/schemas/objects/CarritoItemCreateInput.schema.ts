import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoCreateNestedOneWithoutCarritoItemsInputObjectSchema as CarritoCreateNestedOneWithoutCarritoItemsInputObjectSchema } from './CarritoCreateNestedOneWithoutCarritoItemsInput.schema';
import { PublicacionCreateNestedOneWithoutCarritoItemsInputObjectSchema as PublicacionCreateNestedOneWithoutCarritoItemsInputObjectSchema } from './PublicacionCreateNestedOneWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  carrito: z.lazy(() => CarritoCreateNestedOneWithoutCarritoItemsInputObjectSchema),
  publicacion: z.lazy(() => PublicacionCreateNestedOneWithoutCarritoItemsInputObjectSchema)
}).strict();
export const CarritoItemCreateInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateInput>;
export const CarritoItemCreateInputObjectZodSchema = makeSchema();
