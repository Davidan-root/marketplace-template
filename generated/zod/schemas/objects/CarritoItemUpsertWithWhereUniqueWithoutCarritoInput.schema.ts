import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema';
import { CarritoItemUpdateWithoutCarritoInputObjectSchema as CarritoItemUpdateWithoutCarritoInputObjectSchema } from './CarritoItemUpdateWithoutCarritoInput.schema';
import { CarritoItemUncheckedUpdateWithoutCarritoInputObjectSchema as CarritoItemUncheckedUpdateWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedUpdateWithoutCarritoInput.schema';
import { CarritoItemCreateWithoutCarritoInputObjectSchema as CarritoItemCreateWithoutCarritoInputObjectSchema } from './CarritoItemCreateWithoutCarritoInput.schema';
import { CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema as CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedCreateWithoutCarritoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CarritoItemUpdateWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUncheckedUpdateWithoutCarritoInputObjectSchema)]),
  create: z.union([z.lazy(() => CarritoItemCreateWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema)])
}).strict();
export const CarritoItemUpsertWithWhereUniqueWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemUpsertWithWhereUniqueWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpsertWithWhereUniqueWithoutCarritoInput>;
export const CarritoItemUpsertWithWhereUniqueWithoutCarritoInputObjectZodSchema = makeSchema();
