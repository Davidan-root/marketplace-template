import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioCreateNestedOneWithoutVendedorInputObjectSchema as UsuarioCreateNestedOneWithoutVendedorInputObjectSchema } from './UsuarioCreateNestedOneWithoutVendedorInput.schema';
import { EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema as EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateNestedOneWithoutVendedoresInput.schema';
import { PublicacionCreateNestedManyWithoutVendedorInputObjectSchema as PublicacionCreateNestedManyWithoutVendedorInputObjectSchema } from './PublicacionCreateNestedManyWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutVendedorInputObjectSchema),
  estadoVendedor: z.lazy(() => EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema),
  publicaciones: z.lazy(() => PublicacionCreateNestedManyWithoutVendedorInputObjectSchema).optional()
}).strict();
export const VendedorCreateInputObjectSchema: z.ZodType<Prisma.VendedorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateInput>;
export const VendedorCreateInputObjectZodSchema = makeSchema();
