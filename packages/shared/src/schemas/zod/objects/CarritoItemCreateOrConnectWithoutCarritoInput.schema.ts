import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema';
import { CarritoItemCreateWithoutCarritoInputObjectSchema as CarritoItemCreateWithoutCarritoInputObjectSchema } from './CarritoItemCreateWithoutCarritoInput.schema';
import { CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema as CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedCreateWithoutCarritoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CarritoItemCreateWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema)])
}).strict();
export const CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateOrConnectWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateOrConnectWithoutCarritoInput>;
export const CarritoItemCreateOrConnectWithoutCarritoInputObjectZodSchema = makeSchema();
