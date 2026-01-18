import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './objects/ResenaSelect.schema';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './objects/ResenaInclude.schema';
import { ResenaCreateInputObjectSchema as ResenaCreateInputObjectSchema } from './objects/ResenaCreateInput.schema';
import { ResenaUncheckedCreateInputObjectSchema as ResenaUncheckedCreateInputObjectSchema } from './objects/ResenaUncheckedCreateInput.schema';

export const ResenaCreateOneSchema: z.ZodType<Prisma.ResenaCreateArgs> = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), data: z.union([ResenaCreateInputObjectSchema, ResenaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ResenaCreateArgs>;

export const ResenaCreateOneZodSchema = z.object({ select: ResenaSelectObjectSchema.optional(), include: ResenaIncludeObjectSchema.optional(), data: z.union([ResenaCreateInputObjectSchema, ResenaUncheckedCreateInputObjectSchema]) }).strict();