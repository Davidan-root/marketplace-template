import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EnvioSelectObjectSchema as EnvioSelectObjectSchema } from './objects/EnvioSelect.schema';
import { EnvioIncludeObjectSchema as EnvioIncludeObjectSchema } from './objects/EnvioInclude.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './objects/EnvioWhereUniqueInput.schema';
import { EnvioCreateInputObjectSchema as EnvioCreateInputObjectSchema } from './objects/EnvioCreateInput.schema';
import { EnvioUncheckedCreateInputObjectSchema as EnvioUncheckedCreateInputObjectSchema } from './objects/EnvioUncheckedCreateInput.schema';
import { EnvioUpdateInputObjectSchema as EnvioUpdateInputObjectSchema } from './objects/EnvioUpdateInput.schema';
import { EnvioUncheckedUpdateInputObjectSchema as EnvioUncheckedUpdateInputObjectSchema } from './objects/EnvioUncheckedUpdateInput.schema';

export const EnvioUpsertOneSchema: z.ZodType<Prisma.EnvioUpsertArgs> = z.object({ select: EnvioSelectObjectSchema.optional(), include: EnvioIncludeObjectSchema.optional(), where: EnvioWhereUniqueInputObjectSchema, create: z.union([ EnvioCreateInputObjectSchema, EnvioUncheckedCreateInputObjectSchema ]), update: z.union([ EnvioUpdateInputObjectSchema, EnvioUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EnvioUpsertArgs>;

export const EnvioUpsertOneZodSchema = z.object({ select: EnvioSelectObjectSchema.optional(), include: EnvioIncludeObjectSchema.optional(), where: EnvioWhereUniqueInputObjectSchema, create: z.union([ EnvioCreateInputObjectSchema, EnvioUncheckedCreateInputObjectSchema ]), update: z.union([ EnvioUpdateInputObjectSchema, EnvioUncheckedUpdateInputObjectSchema ]) }).strict();