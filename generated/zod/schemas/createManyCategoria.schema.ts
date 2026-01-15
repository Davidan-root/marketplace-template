import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CategoriaCreateManyInputObjectSchema as CategoriaCreateManyInputObjectSchema } from './objects/CategoriaCreateManyInput.schema';

export const CategoriaCreateManySchema: z.ZodType<Prisma.CategoriaCreateManyArgs> = z.object({ data: z.union([ CategoriaCreateManyInputObjectSchema, z.array(CategoriaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CategoriaCreateManyArgs>;

export const CategoriaCreateManyZodSchema = z.object({ data: z.union([ CategoriaCreateManyInputObjectSchema, z.array(CategoriaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();