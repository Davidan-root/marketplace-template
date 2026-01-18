import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutVendedorInputObjectSchema as UsuarioCreateWithoutVendedorInputObjectSchema } from './UsuarioCreateWithoutVendedorInput.schema';
import { UsuarioUncheckedCreateWithoutVendedorInputObjectSchema as UsuarioUncheckedCreateWithoutVendedorInputObjectSchema } from './UsuarioUncheckedCreateWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioCreateWithoutVendedorInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutVendedorInputObjectSchema)])
}).strict();
export const UsuarioCreateOrConnectWithoutVendedorInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutVendedorInput>;
export const UsuarioCreateOrConnectWithoutVendedorInputObjectZodSchema = makeSchema();
