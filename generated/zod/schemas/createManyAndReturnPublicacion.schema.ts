import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PublicacionSelectObjectSchema as PublicacionSelectObjectSchema } from './objects/PublicacionSelect.schema';
import { PublicacionCreateManyInputObjectSchema as PublicacionCreateManyInputObjectSchema } from './objects/PublicacionCreateManyInput.schema';

export const PublicacionCreateManyAndReturnSchema: z.ZodType<Prisma.PublicacionCreateManyAndReturnArgs> = z.object({ select: PublicacionSelectObjectSchema.optional(), data: z.union([ PublicacionCreateManyInputObjectSchema, z.array(PublicacionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PublicacionCreateManyAndReturnArgs>;

export const PublicacionCreateManyAndReturnZodSchema = z.object({ select: PublicacionSelectObjectSchema.optional(), data: z.union([ PublicacionCreateManyInputObjectSchema, z.array(PublicacionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();