import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemScalarWhereInputObjectSchema as CarritoItemScalarWhereInputObjectSchema } from './CarritoItemScalarWhereInput.schema';
import { CarritoItemUpdateManyMutationInputObjectSchema as CarritoItemUpdateManyMutationInputObjectSchema } from './CarritoItemUpdateManyMutationInput.schema';
import { CarritoItemUncheckedUpdateManyWithoutCarritoInputObjectSchema as CarritoItemUncheckedUpdateManyWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedUpdateManyWithoutCarritoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CarritoItemUpdateManyMutationInputObjectSchema), z.lazy(() => CarritoItemUncheckedUpdateManyWithoutCarritoInputObjectSchema)])
}).strict();
export const CarritoItemUpdateManyWithWhereWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateManyWithWhereWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateManyWithWhereWithoutCarritoInput>;
export const CarritoItemUpdateManyWithWhereWithoutCarritoInputObjectZodSchema = makeSchema();
