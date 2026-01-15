import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './objects/ResenaSelect.schema';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './objects/ResenaInclude.schema';
import { ResenaUpdateInputObjectSchema as ResenaUpdateInputObjectSchema } from './objects/ResenaUpdateInput.schema';
import { ResenaUncheckedUpdateInputObjectSchema as ResenaUncheckedUpdateInputObjectSchema } from './objects/ResenaUncheckedUpdateInput.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';

export const ResenaUpdateOneSchema: z.ZodType<Prisma.ResenaUpdateArgs> = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), data: z.union([ResenaUpdateInputObjectSchema, ResenaUncheckedUpdateInputObjectSchema]), where: ResenaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResenaUpdateArgs>;

export const ResenaUpdateOneZodSchema = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), data: z.union([ResenaUpdateInputObjectSchema, ResenaUncheckedUpdateInputObjectSchema]), where: ResenaWhereUniqueInputObjectSchema }).strict();