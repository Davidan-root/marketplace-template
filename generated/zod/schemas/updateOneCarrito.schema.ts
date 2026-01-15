import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoSelectObjectSchema as CarritoSelectObjectSchema } from './objects/CarritoSelect.schema';
import { CarritoIncludeObjectSchema as CarritoIncludeObjectSchema } from './objects/CarritoInclude.schema';
import { CarritoUpdateInputObjectSchema as CarritoUpdateInputObjectSchema } from './objects/CarritoUpdateInput.schema';
import { CarritoUncheckedUpdateInputObjectSchema as CarritoUncheckedUpdateInputObjectSchema } from './objects/CarritoUncheckedUpdateInput.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './objects/CarritoWhereUniqueInput.schema';

export const CarritoUpdateOneSchema: z.ZodType<Prisma.CarritoUpdateArgs> = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), data: z.union([CarritoUpdateInputObjectSchema, CarritoUncheckedUpdateInputObjectSchema]), where: CarritoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CarritoUpdateArgs>;

export const CarritoUpdateOneZodSchema = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), data: z.union([CarritoUpdateInputObjectSchema, CarritoUncheckedUpdateInputObjectSchema]), where: CarritoWhereUniqueInputObjectSchema }).strict();