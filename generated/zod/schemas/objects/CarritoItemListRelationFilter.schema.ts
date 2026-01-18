import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemWhereInputObjectSchema as CarritoItemWhereInputObjectSchema } from './CarritoItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CarritoItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => CarritoItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => CarritoItemWhereInputObjectSchema).optional()
}).strict();
export const CarritoItemListRelationFilterObjectSchema: z.ZodType<Prisma.CarritoItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemListRelationFilter>;
export const CarritoItemListRelationFilterObjectZodSchema = makeSchema();
