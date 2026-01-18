import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoCreateWithoutCarritoItemsInputObjectSchema as CarritoCreateWithoutCarritoItemsInputObjectSchema } from './CarritoCreateWithoutCarritoItemsInput.schema';
import { CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema as CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema } from './CarritoUncheckedCreateWithoutCarritoItemsInput.schema';
import { CarritoCreateOrConnectWithoutCarritoItemsInputObjectSchema as CarritoCreateOrConnectWithoutCarritoItemsInputObjectSchema } from './CarritoCreateOrConnectWithoutCarritoItemsInput.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './CarritoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CarritoCreateWithoutCarritoItemsInputObjectSchema), z.lazy(() => CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CarritoCreateOrConnectWithoutCarritoItemsInputObjectSchema).optional(),
  connect: z.lazy(() => CarritoWhereUniqueInputObjectSchema).optional()
}).strict();
export const CarritoCreateNestedOneWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.CarritoCreateNestedOneWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateNestedOneWithoutCarritoItemsInput>;
export const CarritoCreateNestedOneWithoutCarritoItemsInputObjectZodSchema = makeSchema();
