import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PublicacionSelectObjectSchema as PublicacionSelectObjectSchema } from './objects/PublicacionSelect.schema';
import { PublicacionUpdateManyMutationInputObjectSchema as PublicacionUpdateManyMutationInputObjectSchema } from './objects/PublicacionUpdateManyMutationInput.schema';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './objects/PublicacionWhereInput.schema';

export const PublicacionUpdateManyAndReturnSchema: z.ZodType<Prisma.PublicacionUpdateManyAndReturnArgs> = z.object({ select: PublicacionSelectObjectSchema.optional(), data: PublicacionUpdateManyMutationInputObjectSchema, where: PublicacionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublicacionUpdateManyAndReturnArgs>;

export const PublicacionUpdateManyAndReturnZodSchema = z.object({ select: PublicacionSelectObjectSchema.optional(), data: PublicacionUpdateManyMutationInputObjectSchema, where: PublicacionWhereInputObjectSchema.optional() }).strict();