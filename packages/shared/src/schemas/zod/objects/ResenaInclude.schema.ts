import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoArgsObjectSchema as ProductoArgsObjectSchema } from './ProductoArgs.schema'

const makeSchema = () => z.object({
  producto: z.union([z.boolean(), z.lazy(() => ProductoArgsObjectSchema)]).optional()
}).strict();
export const ResenaIncludeObjectSchema: z.ZodType<Prisma.ResenaInclude> = makeSchema() as unknown as z.ZodType<Prisma.ResenaInclude>;
export const ResenaIncludeObjectZodSchema = makeSchema();
