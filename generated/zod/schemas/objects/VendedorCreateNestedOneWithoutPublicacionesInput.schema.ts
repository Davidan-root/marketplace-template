import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorCreateWithoutPublicacionesInputObjectSchema as VendedorCreateWithoutPublicacionesInputObjectSchema } from './VendedorCreateWithoutPublicacionesInput.schema';
import { VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema as VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema } from './VendedorUncheckedCreateWithoutPublicacionesInput.schema';
import { VendedorCreateOrConnectWithoutPublicacionesInputObjectSchema as VendedorCreateOrConnectWithoutPublicacionesInputObjectSchema } from './VendedorCreateOrConnectWithoutPublicacionesInput.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendedorCreateWithoutPublicacionesInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendedorCreateOrConnectWithoutPublicacionesInputObjectSchema).optional(),
  connect: z.lazy(() => VendedorWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.VendedorCreateNestedOneWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateNestedOneWithoutPublicacionesInput>;
export const VendedorCreateNestedOneWithoutPublicacionesInputObjectZodSchema = makeSchema();
