import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './CarritoWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CarritoWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CarritoWhereInputObjectSchema).optional()
}).strict();
export const CarritoScalarRelationFilterObjectSchema: z.ZodType<Prisma.CarritoScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CarritoScalarRelationFilter>;
export const CarritoScalarRelationFilterObjectZodSchema = makeSchema();
