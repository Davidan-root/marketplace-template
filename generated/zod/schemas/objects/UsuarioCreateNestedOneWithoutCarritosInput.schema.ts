import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateWithoutCarritosInputObjectSchema as UsuarioCreateWithoutCarritosInputObjectSchema } from './UsuarioCreateWithoutCarritosInput.schema';
import { UsuarioUncheckedCreateWithoutCarritosInputObjectSchema as UsuarioUncheckedCreateWithoutCarritosInputObjectSchema } from './UsuarioUncheckedCreateWithoutCarritosInput.schema';
import { UsuarioCreateOrConnectWithoutCarritosInputObjectSchema as UsuarioCreateOrConnectWithoutCarritosInputObjectSchema } from './UsuarioCreateOrConnectWithoutCarritosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutCarritosInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutCarritosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutCarritosInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional()
}).strict();
export const UsuarioCreateNestedOneWithoutCarritosInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutCarritosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutCarritosInput>;
export const UsuarioCreateNestedOneWithoutCarritosInputObjectZodSchema = makeSchema();
