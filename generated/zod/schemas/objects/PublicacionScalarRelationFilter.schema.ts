import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PublicacionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PublicacionWhereInputObjectSchema).optional()
}).strict();
export const PublicacionScalarRelationFilterObjectSchema: z.ZodType<Prisma.PublicacionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionScalarRelationFilter>;
export const PublicacionScalarRelationFilterObjectZodSchema = makeSchema();
