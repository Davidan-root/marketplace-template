import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoSelectObjectSchema as CarritoSelectObjectSchema } from './objects/CarritoSelect.schema';
import { CarritoUpdateManyMutationInputObjectSchema as CarritoUpdateManyMutationInputObjectSchema } from './objects/CarritoUpdateManyMutationInput.schema';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './objects/CarritoWhereInput.schema';

export const CarritoUpdateManyAndReturnSchema: z.ZodType<Prisma.CarritoUpdateManyAndReturnArgs> = z.object({ select: CarritoSelectObjectSchema.optional(), data: CarritoUpdateManyMutationInputObjectSchema, where: CarritoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CarritoUpdateManyAndReturnArgs>;

export const CarritoUpdateManyAndReturnZodSchema = z.object({ select: CarritoSelectObjectSchema.optional(), data: CarritoUpdateManyMutationInputObjectSchema, where: CarritoWhereInputObjectSchema.optional() }).strict();