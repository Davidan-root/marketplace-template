import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { VendedorUpdateManyMutationInputObjectSchema as VendedorUpdateManyMutationInputObjectSchema } from './objects/VendedorUpdateManyMutationInput.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './objects/VendedorWhereInput.schema';

export const VendedorUpdateManySchema: z.ZodType<Prisma.VendedorUpdateManyArgs> = z.object({ data: VendedorUpdateManyMutationInputObjectSchema, where: VendedorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VendedorUpdateManyArgs>;

export const VendedorUpdateManyZodSchema = z.object({ data: VendedorUpdateManyMutationInputObjectSchema, where: VendedorWhereInputObjectSchema.optional() }).strict();