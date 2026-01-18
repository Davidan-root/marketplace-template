import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CategoriaSumAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaSumAggregateInputType>;
export const CategoriaSumAggregateInputObjectZodSchema = makeSchema();
