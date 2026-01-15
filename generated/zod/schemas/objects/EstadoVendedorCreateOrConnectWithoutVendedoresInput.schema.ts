import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './EstadoVendedorWhereUniqueInput.schema';
import { EstadoVendedorCreateWithoutVendedoresInputObjectSchema as EstadoVendedorCreateWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateWithoutVendedoresInput.schema';
import { EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema as EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUncheckedCreateWithoutVendedoresInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EstadoVendedorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EstadoVendedorCreateWithoutVendedoresInputObjectSchema), z.lazy(() => EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema)])
}).strict();
export const EstadoVendedorCreateOrConnectWithoutVendedoresInputObjectSchema: z.ZodType<Prisma.EstadoVendedorCreateOrConnectWithoutVendedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorCreateOrConnectWithoutVendedoresInput>;
export const EstadoVendedorCreateOrConnectWithoutVendedoresInputObjectZodSchema = makeSchema();
