import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema as PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema } from './PublicacionUncheckedCreateNestedManyWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  usuarioId: z.bigint(),
  publicaciones: z.lazy(() => PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema).optional()
}).strict();
export const VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorUncheckedCreateWithoutEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUncheckedCreateWithoutEstadoVendedorInput>;
export const VendedorUncheckedCreateWithoutEstadoVendedorInputObjectZodSchema = makeSchema();
