import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoSelectObjectSchema as CarritoSelectObjectSchema } from './objects/CarritoSelect.schema';
import { CarritoIncludeObjectSchema as CarritoIncludeObjectSchema } from './objects/CarritoInclude.schema';
import { CarritoCreateInputObjectSchema as CarritoCreateInputObjectSchema } from './objects/CarritoCreateInput.schema';
import { CarritoUncheckedCreateInputObjectSchema as CarritoUncheckedCreateInputObjectSchema } from './objects/CarritoUncheckedCreateInput.schema';

export const CarritoCreateOneSchema: z.ZodType<Prisma.CarritoCreateArgs> = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), data: z.union([CarritoCreateInputObjectSchema, CarritoUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CarritoCreateArgs>;

export const CarritoCreateOneZodSchema = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), data: z.union([CarritoCreateInputObjectSchema, CarritoUncheckedCreateInputObjectSchema]) }).strict();