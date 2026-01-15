import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  usuarioId: z.bigint(),
  estadoVendedorId: z.bigint()
}).strict();
export const VendedorCreateManyInputObjectSchema: z.ZodType<Prisma.VendedorCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateManyInput>;
export const VendedorCreateManyInputObjectZodSchema = makeSchema();
