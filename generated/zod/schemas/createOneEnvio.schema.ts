import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EnvioSelectObjectSchema as EnvioSelectObjectSchema } from './objects/EnvioSelect.schema';
import { EnvioIncludeObjectSchema as EnvioIncludeObjectSchema } from './objects/EnvioInclude.schema';
import { EnvioCreateInputObjectSchema as EnvioCreateInputObjectSchema } from './objects/EnvioCreateInput.schema';
import { EnvioUncheckedCreateInputObjectSchema as EnvioUncheckedCreateInputObjectSchema } from './objects/EnvioUncheckedCreateInput.schema';

export const EnvioCreateOneSchema: z.ZodType<Prisma.EnvioCreateArgs> = z.object({ select: EnvioSelectObjectSchema.optional(), include: EnvioIncludeObjectSchema.optional(), data: z.union([EnvioCreateInputObjectSchema, EnvioUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EnvioCreateArgs>;

export const EnvioCreateOneZodSchema = z.object({ select: EnvioSelectObjectSchema.optional(), include: EnvioIncludeObjectSchema.optional(), data: z.union([EnvioCreateInputObjectSchema, EnvioUncheckedCreateInputObjectSchema]) }).strict();