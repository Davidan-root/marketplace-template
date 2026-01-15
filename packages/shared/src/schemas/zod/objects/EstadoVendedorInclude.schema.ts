import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorFindManySchema as VendedorFindManySchema } from '../findManyVendedor.schema';
import { EstadoVendedorCountOutputTypeArgsObjectSchema as EstadoVendedorCountOutputTypeArgsObjectSchema } from './EstadoVendedorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  vendedores: z.union([z.boolean(), z.lazy(() => VendedorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EstadoVendedorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EstadoVendedorIncludeObjectSchema: z.ZodType<Prisma.EstadoVendedorInclude> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorInclude>;
export const EstadoVendedorIncludeObjectZodSchema = makeSchema();
