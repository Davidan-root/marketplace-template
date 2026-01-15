import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './objects/VendedorWhereInput.schema';

export const VendedorDeleteManySchema: z.ZodType<Prisma.VendedorDeleteManyArgs> = z.object({ where: VendedorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VendedorDeleteManyArgs>;

export const VendedorDeleteManyZodSchema = z.object({ where: VendedorWhereInputObjectSchema.optional() }).strict();