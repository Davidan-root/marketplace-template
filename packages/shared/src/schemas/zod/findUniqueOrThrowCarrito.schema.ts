import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoSelectObjectSchema as CarritoSelectObjectSchema } from './objects/CarritoSelect.schema';
import { CarritoIncludeObjectSchema as CarritoIncludeObjectSchema } from './objects/CarritoInclude.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './objects/CarritoWhereUniqueInput.schema';

export const CarritoFindUniqueOrThrowSchema: z.ZodType<Prisma.CarritoFindUniqueOrThrowArgs> = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), where: CarritoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CarritoFindUniqueOrThrowArgs>;

export const CarritoFindUniqueOrThrowZodSchema = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), where: CarritoWhereUniqueInputObjectSchema }).strict();