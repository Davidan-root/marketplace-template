import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './CarritoWhereInput.schema';
import { CarritoUpdateWithoutCarritoItemsInputObjectSchema as CarritoUpdateWithoutCarritoItemsInputObjectSchema } from './CarritoUpdateWithoutCarritoItemsInput.schema';
import { CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema as CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema } from './CarritoUncheckedUpdateWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CarritoUpdateWithoutCarritoItemsInputObjectSchema), z.lazy(() => CarritoUncheckedUpdateWithoutCarritoItemsInputObjectSchema)])
}).strict();
export const CarritoUpdateToOneWithWhereWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.CarritoUpdateToOneWithWhereWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpdateToOneWithWhereWithoutCarritoItemsInput>;
export const CarritoUpdateToOneWithWhereWithoutCarritoItemsInputObjectZodSchema = makeSchema();
