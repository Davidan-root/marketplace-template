import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PagoSelectObjectSchema as PagoSelectObjectSchema } from './objects/PagoSelect.schema';
import { PagoIncludeObjectSchema as PagoIncludeObjectSchema } from './objects/PagoInclude.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './objects/PagoWhereUniqueInput.schema';
import { PagoCreateInputObjectSchema as PagoCreateInputObjectSchema } from './objects/PagoCreateInput.schema';
import { PagoUncheckedCreateInputObjectSchema as PagoUncheckedCreateInputObjectSchema } from './objects/PagoUncheckedCreateInput.schema';
import { PagoUpdateInputObjectSchema as PagoUpdateInputObjectSchema } from './objects/PagoUpdateInput.schema';
import { PagoUncheckedUpdateInputObjectSchema as PagoUncheckedUpdateInputObjectSchema } from './objects/PagoUncheckedUpdateInput.schema';

export const PagoUpsertOneSchema: z.ZodType<Prisma.PagoUpsertArgs> = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), where: PagoWhereUniqueInputObjectSchema, create: z.union([ PagoCreateInputObjectSchema, PagoUncheckedCreateInputObjectSchema ]), update: z.union([ PagoUpdateInputObjectSchema, PagoUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PagoUpsertArgs>;

export const PagoUpsertOneZodSchema = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), where: PagoWhereUniqueInputObjectSchema, create: z.union([ PagoCreateInputObjectSchema, PagoUncheckedCreateInputObjectSchema ]), update: z.union([ PagoUpdateInputObjectSchema, PagoUncheckedUpdateInputObjectSchema ]) }).strict();