import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublicacionSelectObjectSchema as PublicacionSelectObjectSchema } from './objects/PublicacionSelect.schema';
import { PublicacionIncludeObjectSchema as PublicacionIncludeObjectSchema } from './objects/PublicacionInclude.schema';
import { PublicacionCreateInputObjectSchema as PublicacionCreateInputObjectSchema } from './objects/PublicacionCreateInput.schema';
import { PublicacionUncheckedCreateInputObjectSchema as PublicacionUncheckedCreateInputObjectSchema } from './objects/PublicacionUncheckedCreateInput.schema';

export const PublicacionCreateOneSchema: z.ZodType<Prisma.PublicacionCreateArgs> = z.object({ select: PublicacionSelectObjectSchema.optional(), include: PublicacionIncludeObjectSchema.optional(), data: z.union([PublicacionCreateInputObjectSchema, PublicacionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PublicacionCreateArgs>;

export const PublicacionCreateOneZodSchema = z.object({ select: PublicacionSelectObjectSchema.optional(), include: PublicacionIncludeObjectSchema.optional(), data: z.union([PublicacionCreateInputObjectSchema, PublicacionUncheckedCreateInputObjectSchema]) }).strict();