import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorIncludeObjectSchema as EstadoVendedorIncludeObjectSchema } from './objects/EstadoVendedorInclude.schema';
import { EstadoVendedorOrderByWithRelationInputObjectSchema as EstadoVendedorOrderByWithRelationInputObjectSchema } from './objects/EstadoVendedorOrderByWithRelationInput.schema';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './objects/EstadoVendedorWhereInput.schema';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './objects/EstadoVendedorWhereUniqueInput.schema';
import { EstadoVendedorScalarFieldEnumSchema } from './enums/EstadoVendedorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EstadoVendedorFindFirstSelectSchema: z.ZodType<Prisma.EstadoVendedorSelect> = z.object({
    id: z.boolean().optional(),
    descripcionEV: z.boolean().optional(),
    nombreEV: z.boolean().optional(),
    vendedores: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorSelect>;

export const EstadoVendedorFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    descripcionEV: z.boolean().optional(),
    nombreEV: z.boolean().optional(),
    vendedores: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EstadoVendedorFindFirstSchema: z.ZodType<Prisma.EstadoVendedorFindFirstArgs> = z.object({ select: EstadoVendedorFindFirstSelectSchema.optional(), include: z.lazy(() => EstadoVendedorIncludeObjectSchema.optional()), orderBy: z.union([EstadoVendedorOrderByWithRelationInputObjectSchema, EstadoVendedorOrderByWithRelationInputObjectSchema.array()]).optional(), where: EstadoVendedorWhereInputObjectSchema.optional(), cursor: EstadoVendedorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EstadoVendedorScalarFieldEnumSchema, EstadoVendedorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorFindFirstArgs>;

export const EstadoVendedorFindFirstZodSchema = z.object({ select: EstadoVendedorFindFirstSelectSchema.optional(), include: z.lazy(() => EstadoVendedorIncludeObjectSchema.optional()), orderBy: z.union([EstadoVendedorOrderByWithRelationInputObjectSchema, EstadoVendedorOrderByWithRelationInputObjectSchema.array()]).optional(), where: EstadoVendedorWhereInputObjectSchema.optional(), cursor: EstadoVendedorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EstadoVendedorScalarFieldEnumSchema, EstadoVendedorScalarFieldEnumSchema.array()]).optional() }).strict();