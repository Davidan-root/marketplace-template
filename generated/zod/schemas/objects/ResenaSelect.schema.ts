import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoArgsObjectSchema as ProductoArgsObjectSchema } from './ProductoArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  comentario: z.boolean().optional(),
  fechaHoraAlta: z.boolean().optional(),
  puntaje: z.boolean().optional(),
  productoId: z.boolean().optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductoArgsObjectSchema)]).optional()
}).strict();
export const ResenaSelectObjectSchema: z.ZodType<Prisma.ResenaSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResenaSelect>;
export const ResenaSelectObjectZodSchema = makeSchema();
