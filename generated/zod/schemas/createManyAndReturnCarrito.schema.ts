import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoSelectObjectSchema as CarritoSelectObjectSchema } from './objects/CarritoSelect.schema';
import { CarritoCreateManyInputObjectSchema as CarritoCreateManyInputObjectSchema } from './objects/CarritoCreateManyInput.schema';

export const CarritoCreateManyAndReturnSchema: z.ZodType<Prisma.CarritoCreateManyAndReturnArgs> = z.object({ select: CarritoSelectObjectSchema.optional(), data: z.union([ CarritoCreateManyInputObjectSchema, z.array(CarritoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CarritoCreateManyAndReturnArgs>;

export const CarritoCreateManyAndReturnZodSchema = z.object({ select: CarritoSelectObjectSchema.optional(), data: z.union([ CarritoCreateManyInputObjectSchema, z.array(CarritoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();