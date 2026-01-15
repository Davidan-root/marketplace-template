import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VendedorWhereInputObjectSchema).optional(),
  some: z.lazy(() => VendedorWhereInputObjectSchema).optional(),
  none: z.lazy(() => VendedorWhereInputObjectSchema).optional()
}).strict();
export const VendedorListRelationFilterObjectSchema: z.ZodType<Prisma.VendedorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VendedorListRelationFilter>;
export const VendedorListRelationFilterObjectZodSchema = makeSchema();
