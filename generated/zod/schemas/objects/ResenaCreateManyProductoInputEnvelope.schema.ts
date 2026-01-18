import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ResenaCreateManyProductoInputObjectSchema as ResenaCreateManyProductoInputObjectSchema } from './ResenaCreateManyProductoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ResenaCreateManyProductoInputObjectSchema), z.lazy(() => ResenaCreateManyProductoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ResenaCreateManyProductoInputEnvelopeObjectSchema: z.ZodType<Prisma.ResenaCreateManyProductoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResenaCreateManyProductoInputEnvelope>;
export const ResenaCreateManyProductoInputEnvelopeObjectZodSchema = makeSchema();
