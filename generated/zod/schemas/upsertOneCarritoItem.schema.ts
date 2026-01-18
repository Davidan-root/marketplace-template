import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoItemSelectObjectSchema as CarritoItemSelectObjectSchema } from './objects/CarritoItemSelect.schema';
import { CarritoItemIncludeObjectSchema as CarritoItemIncludeObjectSchema } from './objects/CarritoItemInclude.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './objects/CarritoItemWhereUniqueInput.schema';
import { CarritoItemCreateInputObjectSchema as CarritoItemCreateInputObjectSchema } from './objects/CarritoItemCreateInput.schema';
import { CarritoItemUncheckedCreateInputObjectSchema as CarritoItemUncheckedCreateInputObjectSchema } from './objects/CarritoItemUncheckedCreateInput.schema';
import { CarritoItemUpdateInputObjectSchema as CarritoItemUpdateInputObjectSchema } from './objects/CarritoItemUpdateInput.schema';
import { CarritoItemUncheckedUpdateInputObjectSchema as CarritoItemUncheckedUpdateInputObjectSchema } from './objects/CarritoItemUncheckedUpdateInput.schema';

export const CarritoItemUpsertOneSchema: z.ZodType<Prisma.CarritoItemUpsertArgs> = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), where: CarritoItemWhereUniqueInputObjectSchema, create: z.union([ CarritoItemCreateInputObjectSchema, CarritoItemUncheckedCreateInputObjectSchema ]), update: z.union([ CarritoItemUpdateInputObjectSchema, CarritoItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CarritoItemUpsertArgs>;

export const CarritoItemUpsertOneZodSchema = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), where: CarritoItemWhereUniqueInputObjectSchema, create: z.union([ CarritoItemCreateInputObjectSchema, CarritoItemUncheckedCreateInputObjectSchema ]), update: z.union([ CarritoItemUpdateInputObjectSchema, CarritoItemUncheckedUpdateInputObjectSchema ]) }).strict();