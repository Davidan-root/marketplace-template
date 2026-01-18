import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemCreateManyCarritoInputObjectSchema as CarritoItemCreateManyCarritoInputObjectSchema } from './CarritoItemCreateManyCarritoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CarritoItemCreateManyCarritoInputObjectSchema), z.lazy(() => CarritoItemCreateManyCarritoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CarritoItemCreateManyCarritoInputEnvelopeObjectSchema: z.ZodType<Prisma.CarritoItemCreateManyCarritoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateManyCarritoInputEnvelope>;
export const CarritoItemCreateManyCarritoInputEnvelopeObjectZodSchema = makeSchema();
