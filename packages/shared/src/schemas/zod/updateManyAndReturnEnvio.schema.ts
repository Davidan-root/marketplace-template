import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EnvioSelectObjectSchema as EnvioSelectObjectSchema } from './objects/EnvioSelect.schema';
import { EnvioUpdateManyMutationInputObjectSchema as EnvioUpdateManyMutationInputObjectSchema } from './objects/EnvioUpdateManyMutationInput.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './objects/EnvioWhereInput.schema';

export const EnvioUpdateManyAndReturnSchema: z.ZodType<Prisma.EnvioUpdateManyAndReturnArgs> = z.object({ select: EnvioSelectObjectSchema.optional(), data: EnvioUpdateManyMutationInputObjectSchema, where: EnvioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EnvioUpdateManyAndReturnArgs>;

export const EnvioUpdateManyAndReturnZodSchema = z.object({ select: EnvioSelectObjectSchema.optional(), data: EnvioUpdateManyMutationInputObjectSchema, where: EnvioWhereInputObjectSchema.optional() }).strict();