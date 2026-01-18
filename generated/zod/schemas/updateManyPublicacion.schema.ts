import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PublicacionUpdateManyMutationInputObjectSchema as PublicacionUpdateManyMutationInputObjectSchema } from './objects/PublicacionUpdateManyMutationInput.schema';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './objects/PublicacionWhereInput.schema';

export const PublicacionUpdateManySchema: z.ZodType<Prisma.PublicacionUpdateManyArgs> = z.object({ data: PublicacionUpdateManyMutationInputObjectSchema, where: PublicacionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublicacionUpdateManyArgs>;

export const PublicacionUpdateManyZodSchema = z.object({ data: PublicacionUpdateManyMutationInputObjectSchema, where: PublicacionWhereInputObjectSchema.optional() }).strict();