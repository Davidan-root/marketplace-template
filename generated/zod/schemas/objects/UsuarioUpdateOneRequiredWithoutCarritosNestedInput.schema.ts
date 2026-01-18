import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateWithoutCarritosInputObjectSchema as UsuarioCreateWithoutCarritosInputObjectSchema } from './UsuarioCreateWithoutCarritosInput.schema';
import { UsuarioUncheckedCreateWithoutCarritosInputObjectSchema as UsuarioUncheckedCreateWithoutCarritosInputObjectSchema } from './UsuarioUncheckedCreateWithoutCarritosInput.schema';
import { UsuarioCreateOrConnectWithoutCarritosInputObjectSchema as UsuarioCreateOrConnectWithoutCarritosInputObjectSchema } from './UsuarioCreateOrConnectWithoutCarritosInput.schema';
import { UsuarioUpsertWithoutCarritosInputObjectSchema as UsuarioUpsertWithoutCarritosInputObjectSchema } from './UsuarioUpsertWithoutCarritosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateToOneWithWhereWithoutCarritosInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutCarritosInputObjectSchema } from './UsuarioUpdateToOneWithWhereWithoutCarritosInput.schema';
import { UsuarioUpdateWithoutCarritosInputObjectSchema as UsuarioUpdateWithoutCarritosInputObjectSchema } from './UsuarioUpdateWithoutCarritosInput.schema';
import { UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema as UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutCarritosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutCarritosInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutCarritosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutCarritosInputObjectSchema).optional(),
  upsert: z.lazy(() => UsuarioUpsertWithoutCarritosInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UsuarioUpdateToOneWithWhereWithoutCarritosInputObjectSchema), z.lazy(() => UsuarioUpdateWithoutCarritosInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema)]).optional()
}).strict();
export const UsuarioUpdateOneRequiredWithoutCarritosNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutCarritosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutCarritosNestedInput>;
export const UsuarioUpdateOneRequiredWithoutCarritosNestedInputObjectZodSchema = makeSchema();
