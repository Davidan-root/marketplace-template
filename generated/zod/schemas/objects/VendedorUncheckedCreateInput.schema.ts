import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema as PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema } from './PublicacionUncheckedCreateNestedManyWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  usuarioId: z.bigint(),
  estadoVendedorId: z.bigint(),
  publicaciones: z.lazy(() => PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema).optional()
}).strict();
export const VendedorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VendedorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUncheckedCreateInput>;
export const VendedorUncheckedCreateInputObjectZodSchema = makeSchema();
