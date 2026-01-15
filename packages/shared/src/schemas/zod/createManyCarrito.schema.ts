import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoCreateManyInputObjectSchema as CarritoCreateManyInputObjectSchema } from './objects/CarritoCreateManyInput.schema';

export const CarritoCreateManySchema: z.ZodType<Prisma.CarritoCreateManyArgs> = z.object({ data: z.union([ CarritoCreateManyInputObjectSchema, z.array(CarritoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CarritoCreateManyArgs>;

export const CarritoCreateManyZodSchema = z.object({ data: z.union([ CarritoCreateManyInputObjectSchema, z.array(CarritoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();