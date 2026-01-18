import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoCreateWithoutCarritoItemsInputObjectSchema as CarritoCreateWithoutCarritoItemsInputObjectSchema } from './CarritoCreateWithoutCarritoItemsInput.schema';
import { CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema as CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema } from './CarritoUncheckedCreateWithoutCarritoItemsInput.schema';
import { CarritoCreateOrConnectWithoutCarritoItemsInputObjectSchema as CarritoCreateOrConnectWithoutCarritoItemsInputObjectSchema } from './CarritoCreateOrConnectWithoutCarritoItemsInput.schema';
import { CarritoUpsertWithoutCarritoItemsInputObjectSchema as CarritoUpsertWithoutCarritoItemsInputObjectSchema } from './CarritoUpsertWithoutCarritoItemsInput.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './CarritoWhereUniqueInput.schema';
import { CarritoUpdateToOneWithWhereWithoutCarritoItemsInputObjectSchema as CarritoUpdateToOneWithWhereWithoutCarritoItemsInputObjectSchema } from './CarritoUpdateToOneWithWhereWithoutCarritoItemsInput.schema';
import { CarritoUpdateWithoutCarritoItemsInputObjectSchema as CarritoUpdateWithoutCarritoItemsInputObjectSchema } from './CarritoUpdateWithoutCarritoItemsInput.schema';
import { CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema as CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema } from './CarritoUncheckedUpdateWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CarritoCreateWithoutCarritoItemsInputObjectSchema), z.lazy(() => CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CarritoCreateOrConnectWithoutCarritoItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => CarritoUpsertWithoutCarritoItemsInputObjectSchema).optional(),
  connect: z.lazy(() => CarritoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CarritoUpdateToOneWithWhereWithoutCarritoItemsInputObjectSchema), z.lazy(() => CarritoUpdateWithoutCarritoItemsInputObjectSchema), z.lazy(() => CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema)]).optional()
}).strict();
export const CarritoUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema: z.ZodType<Prisma.CarritoUpdateOneRequiredWithoutCarritoItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpdateOneRequiredWithoutCarritoItemsNestedInput>;
export const CarritoUpdateOneRequiredWithoutCarritoItemsNestedInputObjectZodSchema = makeSchema();
