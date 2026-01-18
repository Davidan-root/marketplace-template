import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateWithoutVendedorInputObjectSchema as UsuarioCreateWithoutVendedorInputObjectSchema } from './UsuarioCreateWithoutVendedorInput.schema';
import { UsuarioUncheckedCreateWithoutVendedorInputObjectSchema as UsuarioUncheckedCreateWithoutVendedorInputObjectSchema } from './UsuarioUncheckedCreateWithoutVendedorInput.schema';
import { UsuarioCreateOrConnectWithoutVendedorInputObjectSchema as UsuarioCreateOrConnectWithoutVendedorInputObjectSchema } from './UsuarioCreateOrConnectWithoutVendedorInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutVendedorInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutVendedorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutVendedorInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional()
}).strict();
export const UsuarioCreateNestedOneWithoutVendedorInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutVendedorInput>;
export const UsuarioCreateNestedOneWithoutVendedorInputObjectZodSchema = makeSchema();
