import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema';
import { VendedorCreateWithoutPublicacionesInputObjectSchema as VendedorCreateWithoutPublicacionesInputObjectSchema } from './VendedorCreateWithoutPublicacionesInput.schema';
import { VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema as VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema } from './VendedorUncheckedCreateWithoutPublicacionesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VendedorCreateWithoutPublicacionesInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema)])
}).strict();
export const VendedorCreateOrConnectWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.VendedorCreateOrConnectWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateOrConnectWithoutPublicacionesInput>;
export const VendedorCreateOrConnectWithoutPublicacionesInputObjectZodSchema = makeSchema();
