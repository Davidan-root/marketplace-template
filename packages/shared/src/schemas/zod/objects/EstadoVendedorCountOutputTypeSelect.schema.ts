import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoVendedorCountOutputTypeCountVendedoresArgsObjectSchema as EstadoVendedorCountOutputTypeCountVendedoresArgsObjectSchema } from './EstadoVendedorCountOutputTypeCountVendedoresArgs.schema'

const makeSchema = () => z.object({
  vendedores: z.union([z.boolean(), z.lazy(() => EstadoVendedorCountOutputTypeCountVendedoresArgsObjectSchema)]).optional()
}).strict();
export const EstadoVendedorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EstadoVendedorCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorCountOutputTypeSelect>;
export const EstadoVendedorCountOutputTypeSelectObjectZodSchema = makeSchema();
