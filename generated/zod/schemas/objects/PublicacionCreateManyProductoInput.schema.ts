import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedorId: z.bigint()
}).strict();
export const PublicacionCreateManyProductoInputObjectSchema: z.ZodType<Prisma.PublicacionCreateManyProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateManyProductoInput>;
export const PublicacionCreateManyProductoInputObjectZodSchema = makeSchema();
