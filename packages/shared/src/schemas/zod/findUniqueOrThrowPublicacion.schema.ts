import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublicacionSelectObjectSchema as PublicacionSelectObjectSchema } from './objects/PublicacionSelect.schema';
import { PublicacionIncludeObjectSchema as PublicacionIncludeObjectSchema } from './objects/PublicacionInclude.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './objects/PublicacionWhereUniqueInput.schema';

export const PublicacionFindUniqueOrThrowSchema: z.ZodType<Prisma.PublicacionFindUniqueOrThrowArgs> = z.object({ select: PublicacionSelectObjectSchema.optional(), include: PublicacionIncludeObjectSchema.optional(), where: PublicacionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PublicacionFindUniqueOrThrowArgs>;

export const PublicacionFindUniqueOrThrowZodSchema = z.object({ select: PublicacionSelectObjectSchema.optional(), include: PublicacionIncludeObjectSchema.optional(), where: PublicacionWhereUniqueInputObjectSchema }).strict();