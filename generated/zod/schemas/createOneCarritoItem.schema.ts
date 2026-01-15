import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoItemSelectObjectSchema as CarritoItemSelectObjectSchema } from './objects/CarritoItemSelect.schema';
import { CarritoItemIncludeObjectSchema as CarritoItemIncludeObjectSchema } from './objects/CarritoItemInclude.schema';
import { CarritoItemCreateInputObjectSchema as CarritoItemCreateInputObjectSchema } from './objects/CarritoItemCreateInput.schema';
import { CarritoItemUncheckedCreateInputObjectSchema as CarritoItemUncheckedCreateInputObjectSchema } from './objects/CarritoItemUncheckedCreateInput.schema';

export const CarritoItemCreateOneSchema: z.ZodType<Prisma.CarritoItemCreateArgs> = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), data: z.union([CarritoItemCreateInputObjectSchema, CarritoItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CarritoItemCreateArgs>;

export const CarritoItemCreateOneZodSchema = z.object({ select: CarritoItemSelectObjectSchema.optional(), include: CarritoItemIncludeObjectSchema.optional(), data: z.union([CarritoItemCreateInputObjectSchema, CarritoItemUncheckedCreateInputObjectSchema]) }).strict();