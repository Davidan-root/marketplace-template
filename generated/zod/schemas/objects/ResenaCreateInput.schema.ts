import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoCreateNestedOneWithoutResenasInputObjectSchema as ProductoCreateNestedOneWithoutResenasInputObjectSchema } from './ProductoCreateNestedOneWithoutResenasInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  comentario: z.string(),
  fechaHoraAlta: z.coerce.date().optional(),
  puntaje: z.number().int(),
  producto: z.lazy(() => ProductoCreateNestedOneWithoutResenasInputObjectSchema)
}).strict();
export const ResenaCreateInputObjectSchema: z.ZodType<Prisma.ResenaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaCreateInput>;
export const ResenaCreateInputObjectZodSchema = makeSchema();
