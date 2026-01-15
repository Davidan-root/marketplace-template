import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereInputObjectSchema).optional()
}).strict();
export const ProductoCountOutputTypeCountPublicacionesArgsObjectSchema = makeSchema();
export const ProductoCountOutputTypeCountPublicacionesArgsObjectZodSchema = makeSchema();
