import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemWhereInputObjectSchema as CarritoItemWhereInputObjectSchema } from './CarritoItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoItemWhereInputObjectSchema).optional()
}).strict();
export const PublicacionCountOutputTypeCountCarritoItemsArgsObjectSchema = makeSchema();
export const PublicacionCountOutputTypeCountCarritoItemsArgsObjectZodSchema = makeSchema();
