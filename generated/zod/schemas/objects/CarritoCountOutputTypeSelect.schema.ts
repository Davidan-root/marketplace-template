import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoCountOutputTypeCountCarritoItemsArgsObjectSchema as CarritoCountOutputTypeCountCarritoItemsArgsObjectSchema } from './CarritoCountOutputTypeCountCarritoItemsArgs.schema'

const makeSchema = () => z.object({
  carritoItems: z.union([z.boolean(), z.lazy(() => CarritoCountOutputTypeCountCarritoItemsArgsObjectSchema)]).optional()
}).strict();
export const CarritoCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CarritoCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCountOutputTypeSelect>;
export const CarritoCountOutputTypeSelectObjectZodSchema = makeSchema();
