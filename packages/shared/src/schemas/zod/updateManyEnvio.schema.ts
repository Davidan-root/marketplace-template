import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EnvioUpdateManyMutationInputObjectSchema as EnvioUpdateManyMutationInputObjectSchema } from './objects/EnvioUpdateManyMutationInput.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './objects/EnvioWhereInput.schema';

export const EnvioUpdateManySchema: z.ZodType<Prisma.EnvioUpdateManyArgs> = z.object({ data: EnvioUpdateManyMutationInputObjectSchema, where: EnvioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EnvioUpdateManyArgs>;

export const EnvioUpdateManyZodSchema = z.object({ data: EnvioUpdateManyMutationInputObjectSchema, where: EnvioWhereInputObjectSchema.optional() }).strict();