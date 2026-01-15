import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoScalarWhereInputObjectSchema as CarritoScalarWhereInputObjectSchema } from './CarritoScalarWhereInput.schema';
import { CarritoUpdateManyMutationInputObjectSchema as CarritoUpdateManyMutationInputObjectSchema } from './CarritoUpdateManyMutationInput.schema';
import { CarritoUncheckedUpdateManyWithoutUsuarioInputObjectSchema as CarritoUncheckedUpdateManyWithoutUsuarioInputObjectSchema } from './CarritoUncheckedUpdateManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CarritoUpdateManyMutationInputObjectSchema), z.lazy(() => CarritoUncheckedUpdateManyWithoutUsuarioInputObjectSchema)])
}).strict();
export const CarritoUpdateManyWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoUpdateManyWithWhereWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpdateManyWithWhereWithoutUsuarioInput>;
export const CarritoUpdateManyWithWhereWithoutUsuarioInputObjectZodSchema = makeSchema();
