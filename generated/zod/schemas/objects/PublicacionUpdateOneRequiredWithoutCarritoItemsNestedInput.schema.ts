import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateWithoutCarritoItemsInputObjectSchema as PublicacionCreateWithoutCarritoItemsInputObjectSchema } from './PublicacionCreateWithoutCarritoItemsInput.schema';
import { PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema as PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema } from './PublicacionUncheckedCreateWithoutCarritoItemsInput.schema';
import { PublicacionCreateOrConnectWithoutCarritoItemsInputObjectSchema as PublicacionCreateOrConnectWithoutCarritoItemsInputObjectSchema } from './PublicacionCreateOrConnectWithoutCarritoItemsInput.schema';
import { PublicacionUpsertWithoutCarritoItemsInputObjectSchema as PublicacionUpsertWithoutCarritoItemsInputObjectSchema } from './PublicacionUpsertWithoutCarritoItemsInput.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionUpdateToOneWithWhereWithoutCarritoItemsInputObjectSchema as PublicacionUpdateToOneWithWhereWithoutCarritoItemsInputObjectSchema } from './PublicacionUpdateToOneWithWhereWithoutCarritoItemsInput.schema';
import { PublicacionUpdateWithoutCarritoItemsInputObjectSchema as PublicacionUpdateWithoutCarritoItemsInputObjectSchema } from './PublicacionUpdateWithoutCarritoItemsInput.schema';
import { PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema as PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema } from './PublicacionUncheckedUpdateWithoutCarritoItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublicacionCreateWithoutCarritoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublicacionCreateOrConnectWithoutCarritoItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => PublicacionUpsertWithoutCarritoItemsInputObjectSchema).optional(),
  connect: z.lazy(() => PublicacionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublicacionUpdateToOneWithWhereWithoutCarritoItemsInputObjectSchema), z.lazy(() => PublicacionUpdateWithoutCarritoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutCarritoItemsInputObjectSchema)]).optional()
}).strict();
export const PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInput>;
export const PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInputObjectZodSchema = makeSchema();
