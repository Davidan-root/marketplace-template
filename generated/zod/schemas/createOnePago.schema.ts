import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PagoSelectObjectSchema as PagoSelectObjectSchema } from './objects/PagoSelect.schema';
import { PagoIncludeObjectSchema as PagoIncludeObjectSchema } from './objects/PagoInclude.schema';
import { PagoCreateInputObjectSchema as PagoCreateInputObjectSchema } from './objects/PagoCreateInput.schema';
import { PagoUncheckedCreateInputObjectSchema as PagoUncheckedCreateInputObjectSchema } from './objects/PagoUncheckedCreateInput.schema';

export const PagoCreateOneSchema: z.ZodType<Prisma.PagoCreateArgs> = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), data: z.union([PagoCreateInputObjectSchema, PagoUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PagoCreateArgs>;

export const PagoCreateOneZodSchema = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), data: z.union([PagoCreateInputObjectSchema, PagoUncheckedCreateInputObjectSchema]) }).strict();