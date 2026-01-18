import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema as VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema } from './VendedorUncheckedCreateNestedOneWithoutUsuarioInput.schema';
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
  pedidos: z.lazy(() => PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioUncheckedCreateWithoutCarritosInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutCarritosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateWithoutCarritosInput>;
export const UsuarioUncheckedCreateWithoutCarritosInputObjectZodSchema = makeSchema();
