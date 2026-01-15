import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  productoId: z.bigint()
}).strict();
export const PublicacionCreateManyVendedorInputObjectSchema: z.ZodType<Prisma.PublicacionCreateManyVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateManyVendedorInput>;
export const PublicacionCreateManyVendedorInputObjectZodSchema = makeSchema();
