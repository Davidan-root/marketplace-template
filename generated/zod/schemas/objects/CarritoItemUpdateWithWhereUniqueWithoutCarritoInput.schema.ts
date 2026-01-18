import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema';
import { CarritoItemUpdateWithoutCarritoInputObjectSchema as CarritoItemUpdateWithoutCarritoInputObjectSchema } from './CarritoItemUpdateWithoutCarritoInput.schema';
import { CarritoItemUncheckedUpdateWithoutCarritoInputObjectSchema as CarritoItemUncheckedUpdateWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedUpdateWithoutCarritoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CarritoItemUpdateWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUncheckedUpdateWithoutCarritoInputObjectSchema)])
}).strict();
export const CarritoItemUpdateWithWhereUniqueWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateWithWhereUniqueWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateWithWhereUniqueWithoutCarritoInput>;
export const CarritoItemUpdateWithWhereUniqueWithoutCarritoInputObjectZodSchema = makeSchema();
