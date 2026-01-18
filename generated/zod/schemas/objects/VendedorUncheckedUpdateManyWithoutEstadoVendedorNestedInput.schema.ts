import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorCreateWithoutEstadoVendedorInputObjectSchema as VendedorCreateWithoutEstadoVendedorInputObjectSchema } from './VendedorCreateWithoutEstadoVendedorInput.schema';
import { VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema as VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema } from './VendedorUncheckedCreateWithoutEstadoVendedorInput.schema';
import { VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema as VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema } from './VendedorCreateOrConnectWithoutEstadoVendedorInput.schema';
import { VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInputObjectSchema as VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInputObjectSchema } from './VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInput.schema';
import { VendedorCreateManyEstadoVendedorInputEnvelopeObjectSchema as VendedorCreateManyEstadoVendedorInputEnvelopeObjectSchema } from './VendedorCreateManyEstadoVendedorInputEnvelope.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema';
import { VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInputObjectSchema as VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInputObjectSchema } from './VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInput.schema';
import { VendedorUpdateManyWithWhereWithoutEstadoVendedorInputObjectSchema as VendedorUpdateManyWithWhereWithoutEstadoVendedorInputObjectSchema } from './VendedorUpdateManyWithWhereWithoutEstadoVendedorInput.schema';
import { VendedorScalarWhereInputObjectSchema as VendedorScalarWhereInputObjectSchema } from './VendedorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendedorCreateWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorCreateWithoutEstadoVendedorInputObjectSchema).array(), z.lazy(() => VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorCreateOrConnectWithoutEstadoVendedorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VendedorCreateManyEstadoVendedorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VendedorWhereUniqueInputObjectSchema), z.lazy(() => VendedorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VendedorWhereUniqueInputObjectSchema), z.lazy(() => VendedorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VendedorWhereUniqueInputObjectSchema), z.lazy(() => VendedorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VendedorWhereUniqueInputObjectSchema), z.lazy(() => VendedorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VendedorUpdateManyWithWhereWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUpdateManyWithWhereWithoutEstadoVendedorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VendedorScalarWhereInputObjectSchema), z.lazy(() => VendedorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VendedorUncheckedUpdateManyWithoutEstadoVendedorNestedInputObjectSchema: z.ZodType<Prisma.VendedorUncheckedUpdateManyWithoutEstadoVendedorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUncheckedUpdateManyWithoutEstadoVendedorNestedInput>;
export const VendedorUncheckedUpdateManyWithoutEstadoVendedorNestedInputObjectZodSchema = makeSchema();
