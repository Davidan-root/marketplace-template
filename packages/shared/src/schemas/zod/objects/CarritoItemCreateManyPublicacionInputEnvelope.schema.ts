import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemCreateManyPublicacionInputObjectSchema as CarritoItemCreateManyPublicacionInputObjectSchema } from './CarritoItemCreateManyPublicacionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CarritoItemCreateManyPublicacionInputObjectSchema), z.lazy(() => CarritoItemCreateManyPublicacionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CarritoItemCreateManyPublicacionInputEnvelopeObjectSchema: z.ZodType<Prisma.CarritoItemCreateManyPublicacionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateManyPublicacionInputEnvelope>;
export const CarritoItemCreateManyPublicacionInputEnvelopeObjectZodSchema = makeSchema();
