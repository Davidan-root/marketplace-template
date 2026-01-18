import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema';
import { CarritoItemUpdateWithoutPublicacionInputObjectSchema as CarritoItemUpdateWithoutPublicacionInputObjectSchema } from './CarritoItemUpdateWithoutPublicacionInput.schema';
import { CarritoItemUncheckedUpdateWithoutPublicacionInputObjectSchema as CarritoItemUncheckedUpdateWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedUpdateWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CarritoItemUpdateWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUncheckedUpdateWithoutPublicacionInputObjectSchema)])
}).strict();
export const CarritoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateWithWhereUniqueWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateWithWhereUniqueWithoutPublicacionInput>;
export const CarritoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectZodSchema = makeSchema();
