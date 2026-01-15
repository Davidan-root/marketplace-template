import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemScalarWhereInputObjectSchema as CarritoItemScalarWhereInputObjectSchema } from './CarritoItemScalarWhereInput.schema';
import { CarritoItemUpdateManyMutationInputObjectSchema as CarritoItemUpdateManyMutationInputObjectSchema } from './CarritoItemUpdateManyMutationInput.schema';
import { CarritoItemUncheckedUpdateManyWithoutPublicacionInputObjectSchema as CarritoItemUncheckedUpdateManyWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedUpdateManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CarritoItemUpdateManyMutationInputObjectSchema), z.lazy(() => CarritoItemUncheckedUpdateManyWithoutPublicacionInputObjectSchema)])
}).strict();
export const CarritoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateManyWithWhereWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateManyWithWhereWithoutPublicacionInput>;
export const CarritoItemUpdateManyWithWhereWithoutPublicacionInputObjectZodSchema = makeSchema();
