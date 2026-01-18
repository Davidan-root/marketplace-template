import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionUpdateWithoutCarritoItemsInputObjectSchema as PublicacionUpdateWithoutCarritoItemsInputObjectSchema } from './PublicacionUpdateWithoutCarritoItemsInput.schema';
import { PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema as PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema } from './PublicacionUncheckedUpdateWithoutCarritoItemsInput.schema';
import { PublicacionCreateWithoutCarritoItemsInputObjectSchema as PublicacionCreateWithoutCarritoItemsInputObjectSchema } from './PublicacionCreateWithoutCarritoItemsInput.schema';
import { PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema as PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema } from './PublicacionUncheckedCreateWithoutCarritoItemsInput.schema';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublicacionUpdateWithoutCarritoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => PublicacionCreateWithoutCarritoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema)]),
  where: z.lazy(() => PublicacionWhereInputObjectSchema).optional()
}).strict();
export const PublicacionUpsertWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionUpsertWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpsertWithoutCarritoItemsInput>;
export const PublicacionUpsertWithoutCarritoItemsInputObjectZodSchema = makeSchema();
