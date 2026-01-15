import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoItemUpdateManyMutationInputObjectSchema as CarritoItemUpdateManyMutationInputObjectSchema } from './objects/CarritoItemUpdateManyMutationInput.schema';
import { CarritoItemWhereInputObjectSchema as CarritoItemWhereInputObjectSchema } from './objects/CarritoItemWhereInput.schema';

export const CarritoItemUpdateManySchema: z.ZodType<Prisma.CarritoItemUpdateManyArgs> = z.object({ data: CarritoItemUpdateManyMutationInputObjectSchema, where: CarritoItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CarritoItemUpdateManyArgs>;

export const CarritoItemUpdateManyZodSchema = z.object({ data: CarritoItemUpdateManyMutationInputObjectSchema, where: CarritoItemWhereInputObjectSchema.optional() }).strict();