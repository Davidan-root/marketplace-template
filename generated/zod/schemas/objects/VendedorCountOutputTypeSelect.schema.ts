import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorCountOutputTypeCountPublicacionesArgsObjectSchema as VendedorCountOutputTypeCountPublicacionesArgsObjectSchema } from './VendedorCountOutputTypeCountPublicacionesArgs.schema'

const makeSchema = () => z.object({
  publicaciones: z.union([z.boolean(), z.lazy(() => VendedorCountOutputTypeCountPublicacionesArgsObjectSchema)]).optional()
}).strict();
export const VendedorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.VendedorCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCountOutputTypeSelect>;
export const VendedorCountOutputTypeSelectObjectZodSchema = makeSchema();
