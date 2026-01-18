import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema as VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema } from './VendedorUncheckedCreateNestedOneWithoutUsuarioInput.schema';
import { CarritoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema as CarritoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './CarritoUncheckedCreateNestedManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  direccionUsuario: z.string(),
  email: z.string(),
  nombreUsuario: z.string(),
  numeroContacto: z.string(),
  passwordHash: z.string(),
  estadoUsuarioId: z.bigint(),
  vendedor: z.lazy(() => VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema).optional(),
  carritos: z.lazy(() => CarritoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioUncheckedCreateWithoutPedidosInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutPedidosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateWithoutPedidosInput>;
export const UsuarioUncheckedCreateWithoutPedidosInputObjectZodSchema = makeSchema();
