import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemWhereInputObjectSchema as CarritoItemWhereInputObjectSchema } from './CarritoItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemWhereInputObjectSchema).optional()
}).strict();
export const CarritoCountOutputTypeCountCarritoItemsArgsObjectSchema = makeSchema();
export const CarritoCountOutputTypeCountCarritoItemsArgsObjectZodSchema = makeSchema();
