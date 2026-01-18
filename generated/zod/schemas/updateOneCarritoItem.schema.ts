import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoItemSelectObjectSchema as CarritoItemSelectObjectSchema } from './objects/CarritoItemSelect.schema';
import { CarritoItemIncludeObjectSchema as CarritoItemIncludeObjectSchema } from './objects/CarritoItemInclude.schema';
import { CarritoItemUpdateInputObjectSchema as CarritoItemUpdateInputObjectSchema } from './objects/CarritoItemUpdateInput.schema';
import { CarritoItemUncheckedUpdateInputObjectSchema as CarritoItemUncheckedUpdateInputObjectSchema } from './objects/CarritoItemUncheckedUpdateInput.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './objects/CarritoItemWhereUniqueInput.schema';

export const CarritoItemUpdateOneSchema: z.ZodType<Prisma.CarritoItemUpdateArgs> = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), data: z.union([CarritoItemUpdateInputObjectSchema, CarritoItemUncheckedUpdateInputObjectSchema]), where: CarritoItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CarritoItemUpdateArgs>;

export const CarritoItemUpdateOneZodSchema = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), data: z.union([CarritoItemUpdateInputObjectSchema, CarritoItemUncheckedUpdateInputObjectSchema]), where: CarritoItemWhereUniqueInputObjectSchema }).strict();