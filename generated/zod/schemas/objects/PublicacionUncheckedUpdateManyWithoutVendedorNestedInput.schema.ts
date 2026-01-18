import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionCreateWithoutVendedorInputObjectSchema as PublicacionCreateWithoutVendedorInputObjectSchema } from './PublicacionCreateWithoutVendedorInput.schema';
import { PublicacionUncheckedCreateWithoutVendedorInputObjectSchema as PublicacionUncheckedCreateWithoutVendedorInputObjectSchema } from './PublicacionUncheckedCreateWithoutVendedorInput.schema';
import { PublicacionCreateOrConnectWithoutVendedorInputObjectSchema as PublicacionCreateOrConnectWithoutVendedorInputObjectSchema } from './PublicacionCreateOrConnectWithoutVendedorInput.schema';
import { PublicacionUpsertWithWhereUniqueWithoutVendedorInputObjectSchema as PublicacionUpsertWithWhereUniqueWithoutVendedorInputObjectSchema } from './PublicacionUpsertWithWhereUniqueWithoutVendedorInput.schema';
import { PublicacionCreateManyVendedorInputEnvelopeObjectSchema as PublicacionCreateManyVendedorInputEnvelopeObjectSchema } from './PublicacionCreateManyVendedorInputEnvelope.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionUpdateWithWhereUniqueWithoutVendedorInputObjectSchema as PublicacionUpdateWithWhereUniqueWithoutVendedorInputObjectSchema } from './PublicacionUpdateWithWhereUniqueWithoutVendedorInput.schema';
import { PublicacionUpdateManyWithWhereWithoutVendedorInputObjectSchema as PublicacionUpdateManyWithWhereWithoutVendedorInputObjectSchema } from './PublicacionUpdateManyWithWhereWithoutVendedorInput.schema';
import { PublicacionScalarWhereInputObjectSchema as PublicacionScalarWhereInputObjectSchema } from './PublicacionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublicacionCreateWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionCreateWithoutVendedorInputObjectSchema).array(), z.lazy(() => PublicacionUncheckedCreateWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutVendedorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublicacionCreateOrConnectWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionCreateOrConnectWithoutVendedorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PublicacionUpsertWithWhereUniqueWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUpsertWithWhereUniqueWithoutVendedorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublicacionCreateManyVendedorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PublicacionUpdateWithWhereUniqueWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUpdateWithWhereUniqueWithoutVendedorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PublicacionUpdateManyWithWhereWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUpdateManyWithWhereWithoutVendedorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PublicacionScalarWhereInputObjectSchema), z.lazy(() => PublicacionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PublicacionUncheckedUpdateManyWithoutVendedorNestedInputObjectSchema: z.ZodType<Prisma.PublicacionUncheckedUpdateManyWithoutVendedorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUncheckedUpdateManyWithoutVendedorNestedInput>;
export const PublicacionUncheckedUpdateManyWithoutVendedorNestedInputObjectZodSchema = makeSchema();
