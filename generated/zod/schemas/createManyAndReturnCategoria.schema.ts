import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from './objects/CategoriaSelect.schema';
import { CategoriaCreateManyInputObjectSchema as CategoriaCreateManyInputObjectSchema } from './objects/CategoriaCreateManyInput.schema';

export const CategoriaCreateManyAndReturnSchema: z.ZodType<Prisma.CategoriaCreateManyAndReturnArgs> = z.object({ select: CategoriaSelectObjectSchema.optional(), data: z.union([ CategoriaCreateManyInputObjectSchema, z.array(CategoriaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CategoriaCreateManyAndReturnArgs>;

export const CategoriaCreateManyAndReturnZodSchema = z.object({ select: CategoriaSelectObjectSchema.optional(), data: z.union([ CategoriaCreateManyInputObjectSchema, z.array(CategoriaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();