import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublicacionSelectObjectSchema as PublicacionSelectObjectSchema } from './objects/PublicacionSelect.schema';
import { PublicacionIncludeObjectSchema as PublicacionIncludeObjectSchema } from './objects/PublicacionInclude.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './objects/PublicacionWhereUniqueInput.schema';
import { PublicacionCreateInputObjectSchema as PublicacionCreateInputObjectSchema } from './objects/PublicacionCreateInput.schema';
import { PublicacionUncheckedCreateInputObjectSchema as PublicacionUncheckedCreateInputObjectSchema } from './objects/PublicacionUncheckedCreateInput.schema';
import { PublicacionUpdateInputObjectSchema as PublicacionUpdateInputObjectSchema } from './objects/PublicacionUpdateInput.schema';
import { PublicacionUncheckedUpdateInputObjectSchema as PublicacionUncheckedUpdateInputObjectSchema } from './objects/PublicacionUncheckedUpdateInput.schema';

export const PublicacionUpsertOneSchema: z.ZodType<Prisma.PublicacionUpsertArgs> = z.object({ select: PublicacionSelectObjectSchema.optional(), include: PublicacionIncludeObjectSchema.optional(), where: PublicacionWhereUniqueInputObjectSchema, create: z.union([ PublicacionCreateInputObjectSchema, PublicacionUncheckedCreateInputObjectSchema ]), update: z.union([ PublicacionUpdateInputObjectSchema, PublicacionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PublicacionUpsertArgs>;

export const PublicacionUpsertOneZodSchema = z.object({ select: PublicacionSelectObjectSchema.optional(), include: PublicacionIncludeObjectSchema.optional(), where: PublicacionWhereUniqueInputObjectSchema, create: z.union([ PublicacionCreateInputObjectSchema, PublicacionUncheckedCreateInputObjectSchema ]), update: z.union([ PublicacionUpdateInputObjectSchema, PublicacionUncheckedUpdateInputObjectSchema ]) }).strict();