import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PagoIncludeObjectSchema as PagoIncludeObjectSchema } from './objects/PagoInclude.schema';
import { PagoOrderByWithRelationInputObjectSchema as PagoOrderByWithRelationInputObjectSchema } from './objects/PagoOrderByWithRelationInput.schema';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './objects/PagoWhereInput.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './objects/PagoWhereUniqueInput.schema';
import { PagoScalarFieldEnumSchema } from './enums/PagoScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PagoFindFirstSelectSchema: z.ZodType<Prisma.PagoSelect> = z.object({
    id: z.boolean().optional(),
    metodoPago: z.boolean().optional(),
    monto: z.boolean().optional(),
    pedidoId: z.boolean().optional(),
    pedido: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PagoSelect>;

export const PagoFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    metodoPago: z.boolean().optional(),
    monto: z.boolean().optional(),
    pedidoId: z.boolean().optional(),
    pedido: z.boolean().optional()
  }).strict();

export const PagoFindFirstSchema: z.ZodType<Prisma.PagoFindFirstArgs> = z.object({ select: PagoFindFirstSelectSchema.optional(), include: z.lazy(() => PagoIncludeObjectSchema.optional()), orderBy: z.union([PagoOrderByWithRelationInputObjectSchema, PagoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PagoWhereInputObjectSchema.optional(), cursor: PagoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PagoScalarFieldEnumSchema, PagoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PagoFindFirstArgs>;

export const PagoFindFirstZodSchema = z.object({ select: PagoFindFirstSelectSchema.optional(), include: z.lazy(() => PagoIncludeObjectSchema.optional()), orderBy: z.union([PagoOrderByWithRelationInputObjectSchema, PagoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PagoWhereInputObjectSchema.optional(), cursor: PagoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PagoScalarFieldEnumSchema, PagoScalarFieldEnumSchema.array()]).optional() }).strict();