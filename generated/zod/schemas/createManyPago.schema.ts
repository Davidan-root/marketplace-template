import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PagoCreateManyInputObjectSchema as PagoCreateManyInputObjectSchema } from './objects/PagoCreateManyInput.schema';

export const PagoCreateManySchema: z.ZodType<Prisma.PagoCreateManyArgs> = z.object({ data: z.union([ PagoCreateManyInputObjectSchema, z.array(PagoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PagoCreateManyArgs>;

export const PagoCreateManyZodSchema = z.object({ data: z.union([ PagoCreateManyInputObjectSchema, z.array(PagoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();