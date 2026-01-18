import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateNestedOneWithoutVendedorInputObjectSchema as UsuarioCreateNestedOneWithoutVendedorInputObjectSchema } from './UsuarioCreateNestedOneWithoutVendedorInput.schema';
import { PublicacionCreateNestedManyWithoutVendedorInputObjectSchema as PublicacionCreateNestedManyWithoutVendedorInputObjectSchema } from './PublicacionCreateNestedManyWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  nombreTienda: z.string(),
  reputacion: z.number().optional(),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutVendedorInputObjectSchema),
  publicaciones: z.lazy(() => PublicacionCreateNestedManyWithoutVendedorInputObjectSchema).optional()
}).strict();
export const VendedorCreateWithoutEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorCreateWithoutEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateWithoutEstadoVendedorInput>;
export const VendedorCreateWithoutEstadoVendedorInputObjectZodSchema = makeSchema();
