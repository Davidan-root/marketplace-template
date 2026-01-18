import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoCreateManyCategoriaInputObjectSchema as ProductoCreateManyCategoriaInputObjectSchema } from './ProductoCreateManyCategoriaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductoCreateManyCategoriaInputObjectSchema), z.lazy(() => ProductoCreateManyCategoriaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductoCreateManyCategoriaInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductoCreateManyCategoriaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateManyCategoriaInputEnvelope>;
export const ProductoCreateManyCategoriaInputEnvelopeObjectZodSchema = makeSchema();
