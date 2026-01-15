import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EnvioSelectObjectSchema as EnvioSelectObjectSchema } from './objects/EnvioSelect.schema';
import { EnvioIncludeObjectSchema as EnvioIncludeObjectSchema } from './objects/EnvioInclude.schema';
import { EnvioUpdateInputObjectSchema as EnvioUpdateInputObjectSchema } from './objects/EnvioUpdateInput.schema';
import { EnvioUncheckedUpdateInputObjectSchema as EnvioUncheckedUpdateInputObjectSchema } from './objects/EnvioUncheckedUpdateInput.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './objects/EnvioWhereUniqueInput.schema';

export const EnvioUpdateOneSchema: z.ZodType<Prisma.EnvioUpdateArgs> = z.object({ select: EnvioSelectObjectSchema.optional(), include: EnvioIncludeObjectSchema.optional(), data: z.union([EnvioUpdateInputObjectSchema, EnvioUncheckedUpdateInputObjectSchema]), where: EnvioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EnvioUpdateArgs>;

export const EnvioUpdateOneZodSchema = z.object({ select: EnvioSelectObjectSchema.optional(), include: EnvioIncludeObjectSchema.optional(), data: z.union([EnvioUpdateInputObjectSchema, EnvioUncheckedUpdateInputObjectSchema]), where: EnvioWhereUniqueInputObjectSchema }).strict();