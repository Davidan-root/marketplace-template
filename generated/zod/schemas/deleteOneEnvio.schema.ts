import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EnvioSelectObjectSchema as EnvioSelectObjectSchema } from './objects/EnvioSelect.schema';
import { EnvioIncludeObjectSchema as EnvioIncludeObjectSchema } from './objects/EnvioInclude.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './objects/EnvioWhereUniqueInput.schema';

export const EnvioDeleteOneSchema: z.ZodType<Prisma.EnvioDeleteArgs> = z.object({ select: EnvioSelectObjectSchema.optional(), include: EnvioIncludeObjectSchema.optional(), where: EnvioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EnvioDeleteArgs>;

export const EnvioDeleteOneZodSchema = z.object({ select: EnvioSelectObjectSchema.optional(), include: EnvioIncludeObjectSchema.optional(), where: EnvioWhereUniqueInputObjectSchema }).strict();