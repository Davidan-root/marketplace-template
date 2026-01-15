import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorCreateNestedOneWithoutUsuarioInputObjectSchema as VendedorCreateNestedOneWithoutUsuarioInputObjectSchema } from './VendedorCreateNestedOneWithoutUsuarioInput.schema';
import { CarritoCreateNestedManyWithoutUsuarioInputObjectSchema as CarritoCreateNestedManyWithoutUsuarioInputObjectSchema } from './CarritoCreateNestedManyWithoutUsuarioInput.schema';
import { PedidoCreateNestedManyWithoutUsuarioInputObjectSchema as PedidoCreateNestedManyWithoutUsuarioInputObjectSchema } from './PedidoCreateNestedManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  direccionUsuario: z.string(),
  email: z.string(),
  nombreUsuario: z.string(),
  numeroContacto: z.string(),
  passwordHash: z.string(),
  vendedor: z.lazy(() => VendedorCreateNestedOneWithoutUsuarioInputObjectSchema).optional(),
  carritos: z.lazy(() => CarritoCreateNestedManyWithoutUsuarioInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioCreateWithoutEstadoUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioCreateWithoutEstadoUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateWithoutEstadoUsuarioInput>;
export const UsuarioCreateWithoutEstadoUsuarioInputObjectZodSchema = makeSchema();
