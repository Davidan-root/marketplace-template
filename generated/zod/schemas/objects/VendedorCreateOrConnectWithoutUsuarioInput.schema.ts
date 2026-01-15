import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema';
import { VendedorCreateWithoutUsuarioInputObjectSchema as VendedorCreateWithoutUsuarioInputObjectSchema } from './VendedorCreateWithoutUsuarioInput.schema';
import { VendedorUncheckedCreateWithoutUsuarioInputObjectSchema as VendedorUncheckedCreateWithoutUsuarioInputObjectSchema } from './VendedorUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VendedorCreateWithoutUsuarioInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const VendedorCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.VendedorCreateOrConnectWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateOrConnectWithoutUsuarioInput>;
export const VendedorCreateOrConnectWithoutUsuarioInputObjectZodSchema = makeSchema();
