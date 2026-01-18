import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema';
import { CarritoItemCreateWithoutPublicacionInputObjectSchema as CarritoItemCreateWithoutPublicacionInputObjectSchema } from './CarritoItemCreateWithoutPublicacionInput.schema';
import { CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema as CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedCreateWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CarritoItemCreateWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema)])
}).strict();
export const CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateOrConnectWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateOrConnectWithoutPublicacionInput>;
export const CarritoItemCreateOrConnectWithoutPublicacionInputObjectZodSchema = makeSchema();
