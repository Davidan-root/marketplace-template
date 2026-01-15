import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorCreateWithoutUsuarioInputObjectSchema as VendedorCreateWithoutUsuarioInputObjectSchema } from './VendedorCreateWithoutUsuarioInput.schema';
import { VendedorUncheckedCreateWithoutUsuarioInputObjectSchema as VendedorUncheckedCreateWithoutUsuarioInputObjectSchema } from './VendedorUncheckedCreateWithoutUsuarioInput.schema';
import { VendedorCreateOrConnectWithoutUsuarioInputObjectSchema as VendedorCreateOrConnectWithoutUsuarioInputObjectSchema } from './VendedorCreateOrConnectWithoutUsuarioInput.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendedorCreateWithoutUsuarioInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutUsuarioInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendedorCreateOrConnectWithoutUsuarioInputObjectSchema).optional(),
  connect: z.lazy(() => VendedorWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.VendedorUncheckedCreateNestedOneWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUncheckedCreateNestedOneWithoutUsuarioInput>;
export const VendedorUncheckedCreateNestedOneWithoutUsuarioInputObjectZodSchema = makeSchema();
