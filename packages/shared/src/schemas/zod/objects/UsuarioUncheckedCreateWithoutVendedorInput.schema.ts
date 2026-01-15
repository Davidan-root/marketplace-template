import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema as CarritoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './CarritoUncheckedCreateNestedManyWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema as PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateNestedManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  direccionUsuario: z.string(),
  email: z.string(),
  nombreUsuario: z.string(),
  numeroContacto: z.string(),
  passwordHash: z.string(),
  estadoUsuarioId: z.bigint(),
  carritos: z.lazy(() => CarritoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioUncheckedCreateWithoutVendedorInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateWithoutVendedorInput>;
export const UsuarioUncheckedCreateWithoutVendedorInputObjectZodSchema = makeSchema();
