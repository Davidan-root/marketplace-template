import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './CarritoWhereUniqueInput.schema';
import { CarritoUpdateWithoutUsuarioInputObjectSchema as CarritoUpdateWithoutUsuarioInputObjectSchema } from './CarritoUpdateWithoutUsuarioInput.schema';
import { CarritoUncheckedUpdateWithoutUsuarioInputObjectSchema as CarritoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './CarritoUncheckedUpdateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CarritoUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUncheckedUpdateWithoutUsuarioInputObjectSchema)])
}).strict();
export const CarritoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoUpdateWithWhereUniqueWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpdateWithWhereUniqueWithoutUsuarioInput>;
export const CarritoUpdateWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
