import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from './objects/CategoriaInclude.schema';
import { CategoriaOrderByWithRelationInputObjectSchema as CategoriaOrderByWithRelationInputObjectSchema } from './objects/CategoriaOrderByWithRelationInput.schema';
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from './objects/CategoriaWhereInput.schema';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './objects/CategoriaWhereUniqueInput.schema';
import { CategoriaScalarFieldEnumSchema } from './enums/CategoriaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoriaFindManySelectSchema: z.ZodType<Prisma.CategoriaSelect> = z.object({
    id: z.boolean().optional(),
    descripcionCategoria: z.boolean().optional(),
    nombreCategoria: z.boolean().optional(),
    productos: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CategoriaSelect>;

export const CategoriaFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    descripcionCategoria: z.boolean().optional(),
    nombreCategoria: z.boolean().optional(),
    productos: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CategoriaFindManySchema: z.ZodType<Prisma.CategoriaFindManyArgs> = z.object({ select: CategoriaFindManySelectSchema.optional(), include: z.lazy(() => CategoriaIncludeObjectSchema.optional()), orderBy: z.union([CategoriaOrderByWithRelationInputObjectSchema, CategoriaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoriaWhereInputObjectSchema.optional(), cursor: CategoriaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoriaScalarFieldEnumSchema, CategoriaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CategoriaFindManyArgs>;

export const CategoriaFindManyZodSchema = z.object({ select: CategoriaFindManySelectSchema.optional(), include: z.lazy(() => CategoriaIncludeObjectSchema.optional()), orderBy: z.union([CategoriaOrderByWithRelationInputObjectSchema, CategoriaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoriaWhereInputObjectSchema.optional(), cursor: CategoriaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoriaScalarFieldEnumSchema, CategoriaScalarFieldEnumSchema.array()]).optional() }).strict();