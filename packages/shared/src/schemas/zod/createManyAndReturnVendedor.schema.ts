import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { VendedorSelectObjectSchema as VendedorSelectObjectSchema } from './objects/VendedorSelect.schema';
import { VendedorCreateManyInputObjectSchema as VendedorCreateManyInputObjectSchema } from './objects/VendedorCreateManyInput.schema';

export const VendedorCreateManyAndReturnSchema: z.ZodType<Prisma.VendedorCreateManyAndReturnArgs> = z.object({ select: VendedorSelectObjectSchema.optional(), data: z.union([ VendedorCreateManyInputObjectSchema, z.array(VendedorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VendedorCreateManyAndReturnArgs>;

export const VendedorCreateManyAndReturnZodSchema = z.object({ select: VendedorSelectObjectSchema.optional(), data: z.union([ VendedorCreateManyInputObjectSchema, z.array(VendedorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();