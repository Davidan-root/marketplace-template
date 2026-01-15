import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoItemSelectObjectSchema as CarritoItemSelectObjectSchema } from './objects/CarritoItemSelect.schema';
import { CarritoItemIncludeObjectSchema as CarritoItemIncludeObjectSchema } from './objects/CarritoItemInclude.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './objects/CarritoItemWhereUniqueInput.schema';

export const CarritoItemFindUniqueSchema: z.ZodType<Prisma.CarritoItemFindUniqueArgs> = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), where: CarritoItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CarritoItemFindUniqueArgs>;

export const CarritoItemFindUniqueZodSchema = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), where: CarritoItemWhereUniqueInputObjectSchema }).strict();