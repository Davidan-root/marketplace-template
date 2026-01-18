import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './EstadoVendedorWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EstadoVendedorWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => EstadoVendedorWhereInputObjectSchema).optional()
}).strict();
export const EstadoVendedorScalarRelationFilterObjectSchema: z.ZodType<Prisma.EstadoVendedorScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorScalarRelationFilter>;
export const EstadoVendedorScalarRelationFilterObjectZodSchema = makeSchema();
