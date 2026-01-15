import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoUpdateWithoutCarritoItemsInputObjectSchema as CarritoUpdateWithoutCarritoItemsInputObjectSchema } from './CarritoUpdateWithoutCarritoItemsInput.schema';
import { CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema as CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema } from './CarritoUncheckedUpdateWithoutCarritoItemsInput.schema';
import { CarritoCreateWithoutCarritoItemsInputObjectSchema as CarritoCreateWithoutCarritoItemsInputObjectSchema } from './CarritoCreateWithoutCarritoItemsInput.schema';
import { CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema as CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema } from './CarritoUncheckedCreateWithoutCarritoItemsInput.schema';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './CarritoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CarritoUpdateWithoutCarritoItemsInputObjectSchema), z.lazy(() => CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => CarritoCreateWithoutCarritoItemsInputObjectSchema), z.lazy(() => CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema)]),
  where: z.lazy(() => CarritoWhereInputObjectSchema).optional()
}).strict();
export const CarritoUpsertWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.CarritoUpsertWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpsertWithoutCarritoItemsInput>;
export const CarritoUpsertWithoutCarritoItemsInputObjectZodSchema = makeSchema();
