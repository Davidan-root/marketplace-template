import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionCreateWithoutProductoInputObjectSchema as PublicacionCreateWithoutProductoInputObjectSchema } from './PublicacionCreateWithoutProductoInput.schema';
import { PublicacionUncheckedCreateWithoutProductoInputObjectSchema as PublicacionUncheckedCreateWithoutProductoInputObjectSchema } from './PublicacionUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublicacionCreateWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const PublicacionCreateOrConnectWithoutProductoInputObjectSchema: z.ZodType<Prisma.PublicacionCreateOrConnectWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateOrConnectWithoutProductoInput>;
export const PublicacionCreateOrConnectWithoutProductoInputObjectZodSchema = makeSchema();
