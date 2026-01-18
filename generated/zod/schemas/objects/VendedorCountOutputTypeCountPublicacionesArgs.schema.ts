import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereInputObjectSchema).optional()
}).strict();
export const VendedorCountOutputTypeCountPublicacionesArgsObjectSchema = makeSchema();
export const VendedorCountOutputTypeCountPublicacionesArgsObjectZodSchema = makeSchema();
