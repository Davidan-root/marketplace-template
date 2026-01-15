import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema as VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema } from './VendedorUncheckedCreateNestedOneWithoutUsuarioInput.schema';
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
  vendedor: z.lazy(() => VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema).optional(),
  carritos: z.lazy(() => CarritoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateInput>;
export const UsuarioUncheckedCreateInputObjectZodSchema = makeSchema();
