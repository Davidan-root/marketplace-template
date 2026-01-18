import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './CarritoWhereUniqueInput.schema';
import { CarritoCreateWithoutUsuarioInputObjectSchema as CarritoCreateWithoutUsuarioInputObjectSchema } from './CarritoCreateWithoutUsuarioInput.schema';
import { CarritoUncheckedCreateWithoutUsuarioInputObjectSchema as CarritoUncheckedCreateWithoutUsuarioInputObjectSchema } from './CarritoUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CarritoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const CarritoCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoCreateOrConnectWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateOrConnectWithoutUsuarioInput>;
export const CarritoCreateOrConnectWithoutUsuarioInputObjectZodSchema = makeSchema();
