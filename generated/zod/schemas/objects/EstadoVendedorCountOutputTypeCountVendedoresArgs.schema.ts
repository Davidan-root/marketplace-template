import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorWhereInputObjectSchema).optional()
}).strict();
export const EstadoVendedorCountOutputTypeCountVendedoresArgsObjectSchema = makeSchema();
export const EstadoVendedorCountOutputTypeCountVendedoresArgsObjectZodSchema = makeSchema();
