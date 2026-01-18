import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoCreateManyUsuarioInputObjectSchema as CarritoCreateManyUsuarioInputObjectSchema } from './CarritoCreateManyUsuarioInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CarritoCreateManyUsuarioInputObjectSchema), z.lazy(() => CarritoCreateManyUsuarioInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CarritoCreateManyUsuarioInputEnvelopeObjectSchema: z.ZodType<Prisma.CarritoCreateManyUsuarioInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateManyUsuarioInputEnvelope>;
export const CarritoCreateManyUsuarioInputEnvelopeObjectZodSchema = makeSchema();
