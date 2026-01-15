import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoUpdateManyMutationInputObjectSchema as CarritoUpdateManyMutationInputObjectSchema } from './objects/CarritoUpdateManyMutationInput.schema';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './objects/CarritoWhereInput.schema';

export const CarritoUpdateManySchema: z.ZodType<Prisma.CarritoUpdateManyArgs> = z.object({ data: CarritoUpdateManyMutationInputObjectSchema, where: CarritoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CarritoUpdateManyArgs>;

export const CarritoUpdateManyZodSchema = z.object({ data: CarritoUpdateManyMutationInputObjectSchema, where: CarritoWhereInputObjectSchema.optional() }).strict();