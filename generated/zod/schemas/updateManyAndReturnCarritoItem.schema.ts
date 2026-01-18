import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoItemSelectObjectSchema as CarritoItemSelectObjectSchema } from './objects/CarritoItemSelect.schema';
import { CarritoItemUpdateManyMutationInputObjectSchema as CarritoItemUpdateManyMutationInputObjectSchema } from './objects/CarritoItemUpdateManyMutationInput.schema';
import { CarritoItemWhereInputObjectSchema as CarritoItemWhereInputObjectSchema } from './objects/CarritoItemWhereInput.schema';

export const CarritoItemUpdateManyAndReturnSchema: z.ZodType<Prisma.CarritoItemUpdateManyAndReturnArgs> = z.object({ select: CarritoItemSelectObjectSchema.optional(), data: CarritoItemUpdateManyMutationInputObjectSchema, where: CarritoItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CarritoItemUpdateManyAndReturnArgs>;

export const CarritoItemUpdateManyAndReturnZodSchema = z.object({ select: CarritoItemSelectObjectSchema.optional(), data: CarritoItemUpdateManyMutationInputObjectSchema, where: CarritoItemWhereInputObjectSchema.optional() }).strict();