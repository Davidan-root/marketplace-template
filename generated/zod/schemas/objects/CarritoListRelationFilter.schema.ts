import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './CarritoWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CarritoWhereInputObjectSchema).optional(),
  some: z.lazy(() => CarritoWhereInputObjectSchema).optional(),
  none: z.lazy(() => CarritoWhereInputObjectSchema).optional()
}).strict();
export const CarritoListRelationFilterObjectSchema: z.ZodType<Prisma.CarritoListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CarritoListRelationFilter>;
export const CarritoListRelationFilterObjectZodSchema = makeSchema();
