import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PagoSelectObjectSchema as PagoSelectObjectSchema } from './objects/PagoSelect.schema';
import { PagoCreateManyInputObjectSchema as PagoCreateManyInputObjectSchema } from './objects/PagoCreateManyInput.schema';

export const PagoCreateManyAndReturnSchema: z.ZodType<Prisma.PagoCreateManyAndReturnArgs> = z.object({ select: PagoSelectObjectSchema.optional(), data: z.union([ PagoCreateManyInputObjectSchema, z.array(PagoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PagoCreateManyAndReturnArgs>;

export const PagoCreateManyAndReturnZodSchema = z.object({ select: PagoSelectObjectSchema.optional(), data: z.union([ PagoCreateManyInputObjectSchema, z.array(PagoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();