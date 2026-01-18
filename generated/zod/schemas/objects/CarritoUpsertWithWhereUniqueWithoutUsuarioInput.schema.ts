import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './CarritoWhereUniqueInput.schema';
import { CarritoUpdateWithoutUsuarioInputObjectSchema as CarritoUpdateWithoutUsuarioInputObjectSchema } from './CarritoUpdateWithoutUsuarioInput.schema';
import { CarritoUncheckedUpdateWithoutUsuarioInputObjectSchema as CarritoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './CarritoUncheckedUpdateWithoutUsuarioInput.schema';
import { CarritoCreateWithoutUsuarioInputObjectSchema as CarritoCreateWithoutUsuarioInputObjectSchema } from './CarritoCreateWithoutUsuarioInput.schema';
import { CarritoUncheckedCreateWithoutUsuarioInputObjectSchema as CarritoUncheckedCreateWithoutUsuarioInputObjectSchema } from './CarritoUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CarritoUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
  create: z.union([z.lazy(() => CarritoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const CarritoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoUpsertWithWhereUniqueWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpsertWithWhereUniqueWithoutUsuarioInput>;
export const CarritoUpsertWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
