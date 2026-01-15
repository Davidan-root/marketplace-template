import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorFindManySchema as VendedorFindManySchema } from '../findManyVendedor.schema';
import { EstadoVendedorCountOutputTypeArgsObjectSchema as EstadoVendedorCountOutputTypeArgsObjectSchema } from './EstadoVendedorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  descripcionEV: z.boolean().optional(),
  nombreEV: z.boolean().optional(),
  vendedores: z.union([z.boolean(), z.lazy(() => VendedorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EstadoVendedorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EstadoVendedorSelectObjectSchema: z.ZodType<Prisma.EstadoVendedorSelect> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorSelect>;
export const EstadoVendedorSelectObjectZodSchema = makeSchema();
