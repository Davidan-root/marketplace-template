import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './PagoWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PagoWhereInputObjectSchema).optional(),
  some: z.lazy(() => PagoWhereInputObjectSchema).optional(),
  none: z.lazy(() => PagoWhereInputObjectSchema).optional()
}).strict();
export const PagoListRelationFilterObjectSchema: z.ZodType<Prisma.PagoListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PagoListRelationFilter>;
export const PagoListRelationFilterObjectZodSchema = makeSchema();
