import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './objects/ResenaSelect.schema';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './objects/ResenaInclude.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';

export const ResenaFindUniqueOrThrowSchema: z.ZodType<Prisma.ResenaFindUniqueOrThrowArgs> = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), where: ResenaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResenaFindUniqueOrThrowArgs>;

export const ResenaFindUniqueOrThrowZodSchema = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), where: ResenaWhereUniqueInputObjectSchema }).strict();