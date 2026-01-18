import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { VendedorCreateManyInputObjectSchema as VendedorCreateManyInputObjectSchema } from './objects/VendedorCreateManyInput.schema';

export const VendedorCreateManySchema: z.ZodType<Prisma.VendedorCreateManyArgs> = z.object({ data: z.union([ VendedorCreateManyInputObjectSchema, z.array(VendedorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VendedorCreateManyArgs>;

export const VendedorCreateManyZodSchema = z.object({ data: z.union([ VendedorCreateManyInputObjectSchema, z.array(VendedorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();