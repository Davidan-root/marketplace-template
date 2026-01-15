import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PagoSelectObjectSchema as PagoSelectObjectSchema } from './objects/PagoSelect.schema';
import { PagoIncludeObjectSchema as PagoIncludeObjectSchema } from './objects/PagoInclude.schema';
import { PagoUpdateInputObjectSchema as PagoUpdateInputObjectSchema } from './objects/PagoUpdateInput.schema';
import { PagoUncheckedUpdateInputObjectSchema as PagoUncheckedUpdateInputObjectSchema } from './objects/PagoUncheckedUpdateInput.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './objects/PagoWhereUniqueInput.schema';

export const PagoUpdateOneSchema: z.ZodType<Prisma.PagoUpdateArgs> = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), data: z.union([PagoUpdateInputObjectSchema, PagoUncheckedUpdateInputObjectSchema]), where: PagoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PagoUpdateArgs>;

export const PagoUpdateOneZodSchema = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), data: z.union([PagoUpdateInputObjectSchema, PagoUncheckedUpdateInputObjectSchema]), where: PagoWhereUniqueInputObjectSchema }).strict();