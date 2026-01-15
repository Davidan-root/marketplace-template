import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema';
import { VendedorCreateWithoutEstadoVendedorInputObjectSchema as VendedorCreateWithoutEstadoVendedorInputObjectSchema } from './VendedorCreateWithoutEstadoVendedorInput.schema';
import { VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema as VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema } from './VendedorUncheckedCreateWithoutEstadoVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VendedorCreateWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema)])
}).strict();
export const VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorCreateOrConnectWithoutEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateOrConnectWithoutEstadoVendedorInput>;
export const VendedorCreateOrConnectWithoutEstadoVendedorInputObjectZodSchema = makeSchema();
