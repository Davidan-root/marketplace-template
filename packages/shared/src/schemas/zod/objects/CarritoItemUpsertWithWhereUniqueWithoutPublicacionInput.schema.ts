import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema';
import { CarritoItemUpdateWithoutPublicacionInputObjectSchema as CarritoItemUpdateWithoutPublicacionInputObjectSchema } from './CarritoItemUpdateWithoutPublicacionInput.schema';
import { CarritoItemUncheckedUpdateWithoutPublicacionInputObjectSchema as CarritoItemUncheckedUpdateWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedUpdateWithoutPublicacionInput.schema';
import { CarritoItemCreateWithoutPublicacionInputObjectSchema as CarritoItemCreateWithoutPublicacionInputObjectSchema } from './CarritoItemCreateWithoutPublicacionInput.schema';
import { CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema as CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedCreateWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CarritoItemUpdateWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUncheckedUpdateWithoutPublicacionInputObjectSchema)]),
  create: z.union([z.lazy(() => CarritoItemCreateWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema)])
}).strict();
export const CarritoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemUpsertWithWhereUniqueWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpsertWithWhereUniqueWithoutPublicacionInput>;
export const CarritoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectZodSchema = makeSchema();
