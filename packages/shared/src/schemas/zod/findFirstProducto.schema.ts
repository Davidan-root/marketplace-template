import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductoIncludeObjectSchema as ProductoIncludeObjectSchema } from './objects/ProductoInclude.schema';
import { ProductoOrderByWithRelationInputObjectSchema as ProductoOrderByWithRelationInputObjectSchema } from './objects/ProductoOrderByWithRelationInput.schema';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';
import { ProductoScalarFieldEnumSchema } from './enums/ProductoScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductoFindFirstSelectSchema: z.ZodType<Prisma.ProductoSelect> = z.object({
    id: z.boolean().optional(),
    descripcionProducto: z.boolean().optional(),
    nombreProducto: z.boolean().optional(),
    categoriaId: z.boolean().optional(),
    categoria: z.boolean().optional(),
    publicaciones: z.boolean().optional(),
    resenas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductoSelect>;

export const ProductoFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    descripcionProducto: z.boolean().optional(),
    nombreProducto: z.boolean().optional(),
    categoriaId: z.boolean().optional(),
    categoria: z.boolean().optional(),
    publicaciones: z.boolean().optional(),
    resenas: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProductoFindFirstSchema: z.ZodType<Prisma.ProductoFindFirstArgs> = z.object({ select: ProductoFindFirstSelectSchema.optional(), include: z.lazy(() => ProductoIncludeObjectSchema.optional()), orderBy: z.union([ProductoOrderByWithRelationInputObjectSchema, ProductoOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductoWhereInputObjectSchema.optional(), cursor: ProductoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductoScalarFieldEnumSchema, ProductoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductoFindFirstArgs>;

export const ProductoFindFirstZodSchema = z.object({ select: ProductoFindFirstSelectSchema.optional(), include: z.lazy(() => ProductoIncludeObjectSchema.optional()), orderBy: z.union([ProductoOrderByWithRelationInputObjectSchema, ProductoOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductoWhereInputObjectSchema.optional(), cursor: ProductoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductoScalarFieldEnumSchema, ProductoScalarFieldEnumSchema.array()]).optional() }).strict();