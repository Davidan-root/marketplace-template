import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './objects/EnvioWhereInput.schema';

export const EnvioDeleteManySchema: z.ZodType<Prisma.EnvioDeleteManyArgs> = z.object({ where: EnvioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EnvioDeleteManyArgs>;

export const EnvioDeleteManyZodSchema = z.object({ where: EnvioWhereInputObjectSchema.optional() }).strict();