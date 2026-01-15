import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoVendedorCreateWithoutVendedoresInputObjectSchema as EstadoVendedorCreateWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateWithoutVendedoresInput.schema';
import { EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema as EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUncheckedCreateWithoutVendedoresInput.schema';
import { EstadoVendedorCreateOrConnectWithoutVendedoresInputObjectSchema as EstadoVendedorCreateOrConnectWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateOrConnectWithoutVendedoresInput.schema';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './EstadoVendedorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EstadoVendedorCreateWithoutVendedoresInputObjectSchema), z.lazy(() => EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EstadoVendedorCreateOrConnectWithoutVendedoresInputObjectSchema).optional(),
  connect: z.lazy(() => EstadoVendedorWhereUniqueInputObjectSchema).optional()
}).strict();
export const EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectSchema: z.ZodType<Prisma.EstadoVendedorCreateNestedOneWithoutVendedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorCreateNestedOneWithoutVendedoresInput>;
export const EstadoVendedorCreateNestedOneWithoutVendedoresInputObjectZodSchema = makeSchema();
