import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './objects/ResenaSelect.schema';
import { ResenaCreateManyInputObjectSchema as ResenaCreateManyInputObjectSchema } from './objects/ResenaCreateManyInput.schema';

export const ResenaCreateManyAndReturnSchema: z.ZodType<Prisma.ResenaCreateManyAndReturnArgs> = z.object({ select: ResenaSelectObjectSchema.optional(), data: z.union([ ResenaCreateManyInputObjectSchema, z.array(ResenaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ResenaCreateManyAndReturnArgs>;

export const ResenaCreateManyAndReturnZodSchema = z.object({ select: ResenaSelectObjectSchema.optional(), data: z.union([ ResenaCreateManyInputObjectSchema, z.array(ResenaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();