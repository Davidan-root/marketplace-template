import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoSelectObjectSchema as CarritoSelectObjectSchema } from './objects/CarritoSelect.schema';
import { CarritoIncludeObjectSchema as CarritoIncludeObjectSchema } from './objects/CarritoInclude.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './objects/CarritoWhereUniqueInput.schema';

export const CarritoDeleteOneSchema: z.ZodType<Prisma.CarritoDeleteArgs> = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), where: CarritoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CarritoDeleteArgs>;

export const CarritoDeleteOneZodSchema = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), where: CarritoWhereUniqueInputObjectSchema }).strict();