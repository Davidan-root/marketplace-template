import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateManyVendedorInputObjectSchema as PublicacionCreateManyVendedorInputObjectSchema } from './PublicacionCreateManyVendedorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PublicacionCreateManyVendedorInputObjectSchema), z.lazy(() => PublicacionCreateManyVendedorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PublicacionCreateManyVendedorInputEnvelopeObjectSchema: z.ZodType<Prisma.PublicacionCreateManyVendedorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateManyVendedorInputEnvelope>;
export const PublicacionCreateManyVendedorInputEnvelopeObjectZodSchema = makeSchema();
