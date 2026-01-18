import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PublicacionSelectObjectSchema as PublicacionSelectObjectSchema } from './objects/PublicacionSelect.schema';
import { PublicacionIncludeObjectSchema as PublicacionIncludeObjectSchema } from './objects/PublicacionInclude.schema';
import { PublicacionUpdateInputObjectSchema as PublicacionUpdateInputObjectSchema } from './objects/PublicacionUpdateInput.schema';
import { PublicacionUncheckedUpdateInputObjectSchema as PublicacionUncheckedUpdateInputObjectSchema } from './objects/PublicacionUncheckedUpdateInput.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './objects/PublicacionWhereUniqueInput.schema';

export const PublicacionUpdateOneSchema: z.ZodType<Prisma.PublicacionUpdateArgs> = z.object({ select: PublicacionSelectObjectSchema.optional(), include: PublicacionIncludeObjectSchema.optional(), data: z.union([PublicacionUpdateInputObjectSchema, PublicacionUncheckedUpdateInputObjectSchema]), where: PublicacionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PublicacionUpdateArgs>;

export const PublicacionUpdateOneZodSchema = z.object({ select: PublicacionSelectObjectSchema.optional(), include: PublicacionIncludeObjectSchema.optional(), data: z.union([PublicacionUpdateInputObjectSchema, PublicacionUncheckedUpdateInputObjectSchema]), where: PublicacionWhereUniqueInputObjectSchema }).strict();