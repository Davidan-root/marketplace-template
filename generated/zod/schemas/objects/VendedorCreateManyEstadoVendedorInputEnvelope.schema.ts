import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorCreateManyEstadoVendedorInputObjectSchema as VendedorCreateManyEstadoVendedorInputObjectSchema } from './VendedorCreateManyEstadoVendedorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VendedorCreateManyEstadoVendedorInputObjectSchema), z.lazy(() => VendedorCreateManyEstadoVendedorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VendedorCreateManyEstadoVendedorInputEnvelopeObjectSchema: z.ZodType<Prisma.VendedorCreateManyEstadoVendedorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCreateManyEstadoVendedorInputEnvelope>;
export const VendedorCreateManyEstadoVendedorInputEnvelopeObjectZodSchema = makeSchema();
