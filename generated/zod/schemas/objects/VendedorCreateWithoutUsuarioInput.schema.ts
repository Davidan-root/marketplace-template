import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema as EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateNestedOneWithoutVendedoresInput.schema';
import { PublicacionCreateNestedManyWithoutVendedorInputObjectSchema as PublicacionCreateNestedManyWithoutVendedorInputObjectSchema } from './PublicacionCreateNestedManyWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  estadoVendedor: z.lazy(() => EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema),
  publicaciones: z.lazy(() => PublicacionCreateNestedManyWithoutVendedorInputObjectSchema).optional()
}).strict();
export const VendedorCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.VendedorCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateWithoutUsuarioInput>;
export const VendedorCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
