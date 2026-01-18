import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './objects/ResenaSelect.schema';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './objects/ResenaInclude.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';

export const ResenaDeleteOneSchema: z.ZodType<Prisma.ResenaDeleteArgs> = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), where: ResenaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResenaDeleteArgs>;

export const ResenaDeleteOneZodSchema = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), where: ResenaWhereUniqueInputObjectSchema }).strict();