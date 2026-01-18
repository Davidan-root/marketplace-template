import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { VendedorSelectObjectSchema as VendedorSelectObjectSchema } from './objects/VendedorSelect.schema';
import { VendedorUpdateManyMutationInputObjectSchema as VendedorUpdateManyMutationInputObjectSchema } from './objects/VendedorUpdateManyMutationInput.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './objects/VendedorWhereInput.schema';

export const VendedorUpdateManyAndReturnSchema: z.ZodType<Prisma.VendedorUpdateManyAndReturnArgs> = z.object({ select: VendedorSelectObjectSchema.optional(), data: VendedorUpdateManyMutationInputObjectSchema, where: VendedorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VendedorUpdateManyAndReturnArgs>;

export const VendedorUpdateManyAndReturnZodSchema = z.object({ select: VendedorSelectObjectSchema.optional(), data: VendedorUpdateManyMutationInputObjectSchema, where: VendedorWhereInputObjectSchema.optional() }).strict();