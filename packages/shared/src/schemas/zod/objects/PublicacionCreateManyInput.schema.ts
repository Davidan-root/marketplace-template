import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedorId: z.bigint(),
  productoId: z.bigint()
}).strict();
export const PublicacionCreateManyInputObjectSchema: z.ZodType<Prisma.PublicacionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateManyInput>;
export const PublicacionCreateManyInputObjectZodSchema = makeSchema();
