import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutCarritosInputObjectSchema as UsuarioCreateWithoutCarritosInputObjectSchema } from './UsuarioCreateWithoutCarritosInput.schema';
import { UsuarioUncheckedCreateWithoutCarritosInputObjectSchema as UsuarioUncheckedCreateWithoutCarritosInputObjectSchema } from './UsuarioUncheckedCreateWithoutCarritosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioCreateWithoutCarritosInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutCarritosInputObjectSchema)])
}).strict();
export const UsuarioCreateOrConnectWithoutCarritosInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutCarritosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutCarritosInput>;
export const UsuarioCreateOrConnectWithoutCarritosInputObjectZodSchema = makeSchema();
