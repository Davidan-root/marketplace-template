import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './objects/CarritoWhereInput.schema';

export const CarritoDeleteManySchema: z.ZodType<Prisma.CarritoDeleteManyArgs> = z.object({ where: CarritoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CarritoDeleteManyArgs>;

export const CarritoDeleteManyZodSchema = z.object({ where: CarritoWhereInputObjectSchema.optional() }).strict();