import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './ResenaWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ResenaWhereInputObjectSchema).optional(),
  some: z.lazy(() => ResenaWhereInputObjectSchema).optional(),
  none: z.lazy(() => ResenaWhereInputObjectSchema).optional()
}).strict();
export const ResenaListRelationFilterObjectSchema: z.ZodType<Prisma.ResenaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResenaListRelationFilter>;
export const ResenaListRelationFilterObjectZodSchema = makeSchema();
