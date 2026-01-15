import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoUsuarioCreateNestedOneWithoutUsuariosInputObjectSchema as EstadoUsuarioCreateNestedOneWithoutUsuariosInputObjectSchema } from './EstadoUsuarioCreateNestedOneWithoutUsuariosInput.schema';
import { CarritoCreateNestedManyWithoutUsuarioInputObjectSchema as CarritoCreateNestedManyWithoutUsuarioInputObjectSchema } from './CarritoCreateNestedManyWithoutUsuarioInput.schema';
import { PedidoCreateNestedManyWithoutUsuarioInputObjectSchema as PedidoCreateNestedManyWithoutUsuarioInputObjectSchema } from './PedidoCreateNestedManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  direccionUsuario: z.string(),
  email: z.string(),
  nombreUsuario: z.string(),
  numeroContacto: z.string(),
  passwordHash: z.string(),
  estadoUsuario: z.lazy(() => EstadoUsuarioCreateNestedOneWithoutUsuariosInputObjectSchema),
  carritos: z.lazy(() => CarritoCreateNestedManyWithoutUsuarioInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioCreateWithoutVendedorInputObjectSchema: z.ZodType<Prisma.UsuarioCreateWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateWithoutVendedorInput>;
export const UsuarioCreateWithoutVendedorInputObjectZodSchema = makeSchema();
