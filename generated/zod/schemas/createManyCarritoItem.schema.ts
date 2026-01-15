import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoItemCreateManyInputObjectSchema as CarritoItemCreateManyInputObjectSchema } from './objects/CarritoItemCreateManyInput.schema';

export const CarritoItemCreateManySchema: z.ZodType<Prisma.CarritoItemCreateManyArgs> = z.object({ data: z.union([ CarritoItemCreateManyInputObjectSchema, z.array(CarritoItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CarritoItemCreateManyArgs>;

export const CarritoItemCreateManyZodSchema = z.object({ data: z.union([ CarritoItemCreateManyInputObjectSchema, z.array(CarritoItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();