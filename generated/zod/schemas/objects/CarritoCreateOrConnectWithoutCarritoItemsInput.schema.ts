import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './CarritoWhereUniqueInput.schema';
import { CarritoCreateWithoutCarritoItemsInputObjectSchema as CarritoCreateWithoutCarritoItemsInputObjectSchema } from './CarritoCreateWithoutCarritoItemsInput.schema';
import { CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema as CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema } from './CarritoUncheckedCreateWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CarritoCreateWithoutCarritoItemsInputObjectSchema), z.lazy(() => CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema)])
}).strict();
export const CarritoCreateOrConnectWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.CarritoCreateOrConnectWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateOrConnectWithoutCarritoItemsInput>;
export const CarritoCreateOrConnectWithoutCarritoItemsInputObjectZodSchema = makeSchema();
