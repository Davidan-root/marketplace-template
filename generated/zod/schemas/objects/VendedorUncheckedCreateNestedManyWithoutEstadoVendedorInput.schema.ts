import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorCreateWithoutEstadoVendedorInputObjectSchema as VendedorCreateWithoutEstadoVendedorInputObjectSchema } from './VendedorCreateWithoutEstadoVendedorInput.schema';
import { VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema as VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema } from './VendedorUncheckedCreateWithoutEstadoVendedorInput.schema';
import { VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema as VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema } from './VendedorCreateOrConnectWithoutEstadoVendedorInput.schema';
import { VendedorCreateManyEstadoVendedorInputEnvelopeObjectSchema as VendedorCreateManyEstadoVendedorInputEnvelopeObjectSchema } from './VendedorCreateManyEstadoVendedorInputEnvelope.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendedorCreateWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorCreateWithoutEstadoVendedorInputObjectSchema).array(), z.lazy(() => VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VendedorCreateManyEstadoVendedorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VendedorWhereUniqueInputObjectSchema), z.lazy(() => VendedorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VendedorUncheckedCreateNestedManyWithoutEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorUncheckedCreateNestedManyWithoutEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUncheckedCreateNestedManyWithoutEstadoVendedorInput>;
export const VendedorUncheckedCreateNestedManyWithoutEstadoVendedorInputObjectZodSchema = makeSchema();
