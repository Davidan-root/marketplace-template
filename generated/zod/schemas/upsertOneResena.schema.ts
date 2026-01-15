import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './objects/ResenaSelect.schema';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './objects/ResenaInclude.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';
import { ResenaCreateInputObjectSchema as ResenaCreateInputObjectSchema } from './objects/ResenaCreateInput.schema';
import { ResenaUncheckedCreateInputObjectSchema as ResenaUncheckedCreateInputObjectSchema } from './objects/ResenaUncheckedCreateInput.schema';
import { ResenaUpdateInputObjectSchema as ResenaUpdateInputObjectSchema } from './objects/ResenaUpdateInput.schema';
import { ResenaUncheckedUpdateInputObjectSchema as ResenaUncheckedUpdateInputObjectSchema } from './objects/ResenaUncheckedUpdateInput.schema';

export const ResenaUpsertOneSchema: z.ZodType<Prisma.ResenaUpsertArgs> = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), where: ResenaWhereUniqueInputObjectSchema, create: z.union([ ResenaCreateInputObjectSchema, ResenaUncheckedCreateInputObjectSchema ]), update: z.union([ ResenaUpdateInputObjectSchema, ResenaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ResenaUpsertArgs>;

export const ResenaUpsertOneZodSchema = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), where: ResenaWhereUniqueInputObjectSchema, create: z.union([ ResenaCreateInputObjectSchema, ResenaUncheckedCreateInputObjectSchema ]), update: z.union([ ResenaUpdateInputObjectSchema, ResenaUncheckedUpdateInputObjectSchema ]) }).strict();