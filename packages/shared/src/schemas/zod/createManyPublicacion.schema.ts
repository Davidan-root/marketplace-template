import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublicacionCreateManyInputObjectSchema as PublicacionCreateManyInputObjectSchema } from './objects/PublicacionCreateManyInput.schema';

export const PublicacionCreateManySchema: z.ZodType<Prisma.PublicacionCreateManyArgs> = z.object({ data: z.union([ PublicacionCreateManyInputObjectSchema, z.array(PublicacionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PublicacionCreateManyArgs>;

export const PublicacionCreateManyZodSchema = z.object({ data: z.union([ PublicacionCreateManyInputObjectSchema, z.array(PublicacionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();