import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './objects/PublicacionWhereInput.schema';

export const PublicacionDeleteManySchema: z.ZodType<Prisma.PublicacionDeleteManyArgs> = z.object({ where: PublicacionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PublicacionDeleteManyArgs>;

export const PublicacionDeleteManyZodSchema = z.object({ where: PublicacionWhereInputObjectSchema.optional() }).strict();