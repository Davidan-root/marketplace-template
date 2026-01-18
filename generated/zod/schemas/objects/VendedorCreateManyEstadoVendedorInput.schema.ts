import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  usuarioId: z.bigint()
}).strict();
export const VendedorCreateManyEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorCreateManyEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateManyEstadoVendedorInput>;
export const VendedorCreateManyEstadoVendedorInputObjectZodSchema = makeSchema();
