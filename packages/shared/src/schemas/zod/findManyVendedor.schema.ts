import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { VendedorIncludeObjectSchema as VendedorIncludeObjectSchema } from './objects/VendedorInclude.schema';
import { VendedorOrderByWithRelationInputObjectSchema as VendedorOrderByWithRelationInputObjectSchema } from './objects/VendedorOrderByWithRelationInput.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './objects/VendedorWhereInput.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './objects/VendedorWhereUniqueInput.schema';
import { VendedorScalarFieldEnumSchema } from './enums/VendedorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VendedorFindManySelectSchema: z.ZodType<Prisma.VendedorSelect> = z.object({
    id: z.boolean().optional(),
    nombreTienda: z.boolean().optional(),
    reputacion: z.boolean().optional(),
    usuarioId: z.boolean().optional(),
    usuario: z.boolean().optional(),
    estadoVendedorId: z.boolean().optional(),
    estadoVendedor: z.boolean().optional(),
    publicaciones: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VendedorSelect>;

export const VendedorFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    nombreTienda: z.boolean().optional(),
    reputacion: z.boolean().optional(),
    usuarioId: z.boolean().optional(),
    usuario: z.boolean().optional(),
    estadoVendedorId: z.boolean().optional(),
    estadoVendedor: z.boolean().optional(),
    publicaciones: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const VendedorFindManySchema: z.ZodType<Prisma.VendedorFindManyArgs> = z.object({ select: VendedorFindManySelectSchema.optional(), include: z.lazy(() => VendedorIncludeObjectSchema.optional()), orderBy: z.union([VendedorOrderByWithRelationInputObjectSchema, VendedorOrderByWithRelationInputObjectSchema.array()]).optional(), where: VendedorWhereInputObjectSchema.optional(), cursor: VendedorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VendedorScalarFieldEnumSchema, VendedorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VendedorFindManyArgs>;

export const VendedorFindManyZodSchema = z.object({ select: VendedorFindManySelectSchema.optional(), include: z.lazy(() => VendedorIncludeObjectSchema.optional()), orderBy: z.union([VendedorOrderByWithRelationInputObjectSchema, VendedorOrderByWithRelationInputObjectSchema.array()]).optional(), where: VendedorWhereInputObjectSchema.optional(), cursor: VendedorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VendedorScalarFieldEnumSchema, VendedorScalarFieldEnumSchema.array()]).optional() }).strict();