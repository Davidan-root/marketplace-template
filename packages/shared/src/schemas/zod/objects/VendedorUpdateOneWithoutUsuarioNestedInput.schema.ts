import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorCreateWithoutUsuarioInputObjectSchema as VendedorCreateWithoutUsuarioInputObjectSchema } from './VendedorCreateWithoutUsuarioInput.schema';
import { VendedorUncheckedCreateWithoutUsuarioInputObjectSchema as VendedorUncheckedCreateWithoutUsuarioInputObjectSchema } from './VendedorUncheckedCreateWithoutUsuarioInput.schema';
import { VendedorCreateOrConnectWithoutUsuarioInputObjectSchema as VendedorCreateOrConnectWithoutUsuarioInputObjectSchema } from './VendedorCreateOrConnectWithoutUsuarioInput.schema';
import { VendedorUpsertWithoutUsuarioInputObjectSchema as VendedorUpsertWithoutUsuarioInputObjectSchema } from './VendedorUpsertWithoutUsuarioInput.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema';
import { VendedorUpdateToOneWithWhereWithoutUsuarioInputObjectSchema as VendedorUpdateToOneWithWhereWithoutUsuarioInputObjectSchema } from './VendedorUpdateToOneWithWhereWithoutUsuarioInput.schema';
import { VendedorUpdateWithoutUsuarioInputObjectSchema as VendedorUpdateWithoutUsuarioInputObjectSchema } from './VendedorUpdateWithoutUsuarioInput.schema';
import { VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema as VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema } from './VendedorUncheckedUpdateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendedorCreateWithoutUsuarioInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutUsuarioInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendedorCreateOrConnectWithoutUsuarioInputObjectSchema).optional(),
  upsert: z.lazy(() => VendedorUpsertWithoutUsuarioInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => VendedorWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => VendedorWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => VendedorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VendedorUpdateToOneWithWhereWithoutUsuarioInputObjectSchema), z.lazy(() => VendedorUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema)]).optional()
}).strict();
export const VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.VendedorUpdateOneWithoutUsuarioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpdateOneWithoutUsuarioNestedInput>;
export const VendedorUpdateOneWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
