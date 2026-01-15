import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema';
import { PublicacionUpdateWithoutCarritoItemsInputObjectSchema as PublicacionUpdateWithoutCarritoItemsInputObjectSchema } from './PublicacionUpdateWithoutCarritoItemsInput.schema';
import { PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema as PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema } from './PublicacionUncheckedUpdateWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublicacionUpdateWithoutCarritoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema)])
}).strict();
export const PublicacionUpdateToOneWithWhereWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateToOneWithWhereWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateToOneWithWhereWithoutCarritoItemsInput>;
export const PublicacionUpdateToOneWithWhereWithoutCarritoItemsInputObjectZodSchema = makeSchema();
