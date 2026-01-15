import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PublicacionWhereInputObjectSchema).optional(),
  some: z.lazy(() => PublicacionWhereInputObjectSchema).optional(),
  none: z.lazy(() => PublicacionWhereInputObjectSchema).optional()
}).strict();
export const PublicacionListRelationFilterObjectSchema: z.ZodType<Prisma.PublicacionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionListRelationFilter>;
export const PublicacionListRelationFilterObjectZodSchema = makeSchema();
