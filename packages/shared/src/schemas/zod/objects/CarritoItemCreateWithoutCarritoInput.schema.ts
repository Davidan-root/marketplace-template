import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateNestedOneWithoutCarritoItemsInputObjectSchema as PublicacionCreateNestedOneWithoutCarritoItemsInputObjectSchema } from './PublicacionCreateNestedOneWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadCI: z.number().int(),
  publicacion: z.lazy(() => PublicacionCreateNestedOneWithoutCarritoItemsInputObjectSchema)
}).strict();
export const CarritoItemCreateWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateWithoutCarritoInput>;
export const CarritoItemCreateWithoutCarritoInputObjectZodSchema = makeSchema();
