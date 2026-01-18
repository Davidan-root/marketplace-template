import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionUpdateWithoutProductoInputObjectSchema as PublicacionUpdateWithoutProductoInputObjectSchema } from './PublicacionUpdateWithoutProductoInput.schema';
import { PublicacionUncheckedUpdateWithoutProductoInputObjectSchema as PublicacionUncheckedUpdateWithoutProductoInputObjectSchema } from './PublicacionUncheckedUpdateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PublicacionUpdateWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutProductoInputObjectSchema)])
}).strict();
export const PublicacionUpdateWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateWithWhereUniqueWithoutProductoInput>;
export const PublicacionUpdateWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
