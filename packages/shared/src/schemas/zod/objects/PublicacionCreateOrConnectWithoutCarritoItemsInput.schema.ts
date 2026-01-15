import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionCreateWithoutCarritoItemsInputObjectSchema as PublicacionCreateWithoutCarritoItemsInputObjectSchema } from './PublicacionCreateWithoutCarritoItemsInput.schema';
import { PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema as PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema } from './PublicacionUncheckedCreateWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublicacionCreateWithoutCarritoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema)])
}).strict();
export const PublicacionCreateOrConnectWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionCreateOrConnectWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateOrConnectWithoutCarritoItemsInput>;
export const PublicacionCreateOrConnectWithoutCarritoItemsInputObjectZodSchema = makeSchema();
