import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionCreateWithoutProductoInputObjectSchema as PublicacionCreateWithoutProductoInputObjectSchema } from './PublicacionCreateWithoutProductoInput.schema';
import { PublicacionUncheckedCreateWithoutProductoInputObjectSchema as PublicacionUncheckedCreateWithoutProductoInputObjectSchema } from './PublicacionUncheckedCreateWithoutProductoInput.schema';
import { PublicacionCreateOrConnectWithoutProductoInputObjectSchema as PublicacionCreateOrConnectWithoutProductoInputObjectSchema } from './PublicacionCreateOrConnectWithoutProductoInput.schema';
import { PublicacionCreateManyProductoInputEnvelopeObjectSchema as PublicacionCreateManyProductoInputEnvelopeObjectSchema } from './PublicacionCreateManyProductoInputEnvelope.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublicacionCreateWithoutProductoInputObjectSchema), z.lazy(() => PublicacionCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => PublicacionUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublicacionCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => PublicacionCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublicacionCreateManyProductoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PublicacionCreateNestedManyWithoutProductoInputObjectSchema: z.ZodType<Prisma.PublicacionCreateNestedManyWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateNestedManyWithoutProductoInput>;
export const PublicacionCreateNestedManyWithoutProductoInputObjectZodSchema = makeSchema();
