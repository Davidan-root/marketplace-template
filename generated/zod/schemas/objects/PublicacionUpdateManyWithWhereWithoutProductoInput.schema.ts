import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionScalarWhereInputObjectSchema as PublicacionScalarWhereInputObjectSchema } from './PublicacionScalarWhereInput.schema';
import { PublicacionUpdateManyMutationInputObjectSchema as PublicacionUpdateManyMutationInputObjectSchema } from './PublicacionUpdateManyMutationInput.schema';
import { PublicacionUncheckedUpdateManyWithoutProductoInputObjectSchema as PublicacionUncheckedUpdateManyWithoutProductoInputObjectSchema } from './PublicacionUncheckedUpdateManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PublicacionUpdateManyMutationInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateManyWithoutProductoInputObjectSchema)])
}).strict();
export const PublicacionUpdateManyWithWhereWithoutProductoInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateManyWithWhereWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateManyWithWhereWithoutProductoInput>;
export const PublicacionUpdateManyWithWhereWithoutProductoInputObjectZodSchema = makeSchema();
