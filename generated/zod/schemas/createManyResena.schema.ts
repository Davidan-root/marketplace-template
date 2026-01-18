import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ResenaCreateManyInputObjectSchema as ResenaCreateManyInputObjectSchema } from './objects/ResenaCreateManyInput.schema';

export const ResenaCreateManySchema: z.ZodType<Prisma.ResenaCreateManyArgs> = z.object({ data: z.union([ ResenaCreateManyInputObjectSchema, z.array(ResenaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ResenaCreateManyArgs>;

export const ResenaCreateManyZodSchema = z.object({ data: z.union([ ResenaCreateManyInputObjectSchema, z.array(ResenaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();