import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoItemWhereInputObjectSchema as CarritoItemWhereInputObjectSchema } from './objects/CarritoItemWhereInput.schema';

export const CarritoItemDeleteManySchema: z.ZodType<Prisma.CarritoItemDeleteManyArgs> = z.object({ where: CarritoItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CarritoItemDeleteManyArgs>;

export const CarritoItemDeleteManyZodSchema = z.object({ where: CarritoItemWhereInputObjectSchema.optional() }).strict();