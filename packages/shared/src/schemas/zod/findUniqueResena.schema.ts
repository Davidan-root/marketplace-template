import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './objects/ResenaSelect.schema';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './objects/ResenaInclude.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';

export const ResenaFindUniqueSchema: z.ZodType<Prisma.ResenaFindUniqueArgs> = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), where: ResenaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResenaFindUniqueArgs>;

export const ResenaFindUniqueZodSchema = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), where: ResenaWhereUniqueInputObjectSchema }).strict();