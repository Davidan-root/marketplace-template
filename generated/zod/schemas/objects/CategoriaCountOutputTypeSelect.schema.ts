import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CategoriaCountOutputTypeCountProductosArgsObjectSchema as CategoriaCountOutputTypeCountProductosArgsObjectSchema } from './CategoriaCountOutputTypeCountProductosArgs.schema'

const makeSchema = () => z.object({
  productos: z.union([z.boolean(), z.lazy(() => CategoriaCountOutputTypeCountProductosArgsObjectSchema)]).optional()
}).strict();
export const CategoriaCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CategoriaCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCountOutputTypeSelect>;
export const CategoriaCountOutputTypeSelectObjectZodSchema = makeSchema();
