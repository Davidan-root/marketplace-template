import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionUpdateWithoutProductoInputObjectSchema as PublicacionUpdateWithoutProductoInputObjectSchema } from './PublicacionUpdateWithoutProductoInput.schema';
import { PublicacionUncheckedUpdateWithoutProductoInputObjectSchema as PublicacionUncheckedUpdateWithoutProductoInputObjectSchema } from './PublicacionUncheckedUpdateWithoutProductoInput.schema';
import { PublicacionCreateWithoutProductoInputObjectSchema as PublicacionCreateWithoutProductoInputObjectSchema } from './PublicacionCreateWithoutProductoInput.schema';
import { PublicacionUncheckedCreateWithoutProductoInputObjectSchema as PublicacionUncheckedCreateWithoutProductoInputObjectSchema } from './PublicacionUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PublicacionUpdateWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutProductoInputObjectSchema)]),
  create: z.union([z.lazy(() => PublicacionCreateWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const PublicacionUpsertWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.PublicacionUpsertWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpsertWithWhereUniqueWithoutProductoInput>;
export const PublicacionUpsertWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
