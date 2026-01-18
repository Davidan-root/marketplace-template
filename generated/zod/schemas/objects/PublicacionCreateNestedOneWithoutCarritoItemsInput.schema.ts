import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionCreateWithoutCarritoItemsInputObjectSchema as PublicacionCreateWithoutCarritoItemsInputObjectSchema } from './PublicacionCreateWithoutCarritoItemsInput.schema';
import { PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema as PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema } from './PublicacionUncheckedCreateWithoutCarritoItemsInput.schema';
import { PublicacionCreateOrConnectWithoutCarritoItemsInputObjectSchema as PublicacionCreateOrConnectWithoutCarritoItemsInputObjectSchema } from './PublicacionCreateOrConnectWithoutCarritoItemsInput.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublicacionCreateWithoutCarritoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublicacionCreateOrConnectWithoutCarritoItemsInputObjectSchema).optional(),
  connect: z.lazy(() => PublicacionWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublicacionCreateNestedOneWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionCreateNestedOneWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateNestedOneWithoutCarritoItemsInput>;
export const PublicacionCreateNestedOneWithoutCarritoItemsInputObjectZodSchema = makeSchema();
