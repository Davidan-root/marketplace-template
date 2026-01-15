import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateManyProductoInputObjectSchema as PublicacionCreateManyProductoInputObjectSchema } from './PublicacionCreateManyProductoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PublicacionCreateManyProductoInputObjectSchema), z.lazy(() => PublicacionCreateManyProductoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PublicacionCreateManyProductoInputEnvelopeObjectSchema: z.ZodType<Prisma.PublicacionCreateManyProductoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateManyProductoInputEnvelope>;
export const PublicacionCreateManyProductoInputEnvelopeObjectZodSchema = makeSchema();
