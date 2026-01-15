import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioCreateWithoutVendedorInputObjectSchema as UsuarioCreateWithoutVendedorInputObjectSchema } from './UsuarioCreateWithoutVendedorInput.schema';
import { UsuarioUncheckedCreateWithoutVendedorInputObjectSchema as UsuarioUncheckedCreateWithoutVendedorInputObjectSchema } from './UsuarioUncheckedCreateWithoutVendedorInput.schema';
import { UsuarioCreateOrConnectWithoutVendedorInputObjectSchema as UsuarioCreateOrConnectWithoutVendedorInputObjectSchema } from './UsuarioCreateOrConnectWithoutVendedorInput.schema';
import { UsuarioUpsertWithoutVendedorInputObjectSchema as UsuarioUpsertWithoutVendedorInputObjectSchema } from './UsuarioUpsertWithoutVendedorInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateToOneWithWhereWithoutVendedorInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutVendedorInputObjectSchema } from './UsuarioUpdateToOneWithWhereWithoutVendedorInput.schema';
import { UsuarioUpdateWithoutVendedorInputObjectSchema as UsuarioUpdateWithoutVendedorInputObjectSchema } from './UsuarioUpdateWithoutVendedorInput.schema';
import { UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema as UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema } from './UsuarioUncheckedUpdateWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutVendedorInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutVendedorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutVendedorInputObjectSchema).optional(),
  upsert: z.lazy(() => UsuarioUpsertWithoutVendedorInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UsuarioUpdateToOneWithWhereWithoutVendedorInputObjectSchema), z.lazy(() => UsuarioUpdateWithoutVendedorInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema)]).optional()
}).strict();
export const UsuarioUpdateOneRequiredWithoutVendedorNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutVendedorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutVendedorNestedInput>;
export const UsuarioUpdateOneRequiredWithoutVendedorNestedInputObjectZodSchema = makeSchema();
