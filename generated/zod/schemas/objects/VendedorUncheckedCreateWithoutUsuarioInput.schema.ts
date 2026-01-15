import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema as PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema } from './PublicacionUncheckedCreateNestedManyWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  estadoVendedorId: z.bigint(),
  publicaciones: z.lazy(() => PublicacionUncheckedCreateNestedManyWithoutVendedorInputObjectSchema).optional()
}).strict();
export const VendedorUncheckedCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.VendedorUncheckedCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUncheckedCreateWithoutUsuarioInput>;
export const VendedorUncheckedCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
