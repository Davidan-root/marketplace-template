import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateNestedOneWithoutVendedorInputObjectSchema as UsuarioCreateNestedOneWithoutVendedorInputObjectSchema } from './UsuarioCreateNestedOneWithoutVendedorInput.schema';
import { EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema as EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateNestedOneWithoutVendedoresInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutVendedorInputObjectSchema),
  estadoVendedor: z.lazy(() => EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema)
}).strict();
export const VendedorCreateWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.VendedorCreateWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateWithoutPublicacionesInput>;
export const VendedorCreateWithoutPublicacionesInputObjectZodSchema = makeSchema();
