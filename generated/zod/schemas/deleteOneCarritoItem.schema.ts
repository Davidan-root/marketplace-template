import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoItemSelectObjectSchema as CarritoItemSelectObjectSchema } from './objects/CarritoItemSelect.schema';
import { CarritoItemIncludeObjectSchema as CarritoItemIncludeObjectSchema } from './objects/CarritoItemInclude.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './objects/CarritoItemWhereUniqueInput.schema';

export const CarritoItemDeleteOneSchema: z.ZodType<Prisma.CarritoItemDeleteArgs> = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), where: CarritoItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CarritoItemDeleteArgs>;

export const CarritoItemDeleteOneZodSchema = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), where: CarritoItemWhereUniqueInputObjectSchema }).strict();