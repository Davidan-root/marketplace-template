import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateWithoutVendedorInputObjectSchema as PublicacionCreateWithoutVendedorInputObjectSchema } from './PublicacionCreateWithoutVendedorInput.schema';
import { PublicacionUncheckedCreateWithoutVendedorInputObjectSchema as PublicacionUncheckedCreateWithoutVendedorInputObjectSchema } from './PublicacionUncheckedCreateWithoutVendedorInput.schema';
import { PublicacionCreateOrConnectWithoutVendedorInputObjectSchema as PublicacionCreateOrConnectWithoutVendedorInputObjectSchema } from './PublicacionCreateOrConnectWithoutVendedorInput.schema';
import { PublicacionCreateManyVendedorInputEnvelopeObjectSchema as PublicacionCreateManyVendedorInputEnvelopeObjectSchema } from './PublicacionCreateManyVendedorInputEnvelope.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublicacionCreateWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionCreateWithoutVendedorInputObjectSchema).array(), z.lazy(() => PublicacionUncheckedCreateWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutVendedorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublicacionCreateOrConnectWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionCreateOrConnectWithoutVendedorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublicacionCreateManyVendedorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PublicacionCreateNestedManyWithoutVendedorInputObjectSchema: z.ZodType<Prisma.PublicacionCreateNestedManyWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateNestedManyWithoutVendedorInput>;
export const PublicacionCreateNestedManyWithoutVendedorInputObjectZodSchema = makeSchema();
