import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoItemSelectObjectSchema as CarritoItemSelectObjectSchema } from './objects/CarritoItemSelect.schema';
import { CarritoItemCreateManyInputObjectSchema as CarritoItemCreateManyInputObjectSchema } from './objects/CarritoItemCreateManyInput.schema';

export const CarritoItemCreateManyAndReturnSchema: z.ZodType<Prisma.CarritoItemCreateManyAndReturnArgs> = z.object({ select: CarritoItemSelectObjectSchema.optional(), data: z.union([ CarritoItemCreateManyInputObjectSchema, z.array(CarritoItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CarritoItemCreateManyAndReturnArgs>;

export const CarritoItemCreateManyAndReturnZodSchema = z.object({ select: CarritoItemSelectObjectSchema.optional(), data: z.union([ CarritoItemCreateManyInputObjectSchema, z.array(CarritoItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();