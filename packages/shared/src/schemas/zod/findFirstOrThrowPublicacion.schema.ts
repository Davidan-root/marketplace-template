import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublicacionIncludeObjectSchema as PublicacionIncludeObjectSchema } from './objects/PublicacionInclude.schema';
import { PublicacionOrderByWithRelationInputObjectSchema as PublicacionOrderByWithRelationInputObjectSchema } from './objects/PublicacionOrderByWithRelationInput.schema';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './objects/PublicacionWhereInput.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './objects/PublicacionWhereUniqueInput.schema';
import { PublicacionScalarFieldEnumSchema } from './enums/PublicacionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PublicacionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PublicacionSelect> = z.object({
    id: z.boolean().optional(),
    condicionesVenta: z.boolean().optional(),
    enviosVenta: z.boolean().optional(),
    precioVenta: z.boolean().optional(),
    stockVenta: z.boolean().optional(),
    vendedorId: z.boolean().optional(),
    vendedor: z.boolean().optional(),
    productoId: z.boolean().optional(),
    producto: z.boolean().optional(),
    carritoItems: z.boolean().optional(),
    pedidoItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PublicacionSelect>;

export const PublicacionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    condicionesVenta: z.boolean().optional(),
    enviosVenta: z.boolean().optional(),
    precioVenta: z.boolean().optional(),
    stockVenta: z.boolean().optional(),
    vendedorId: z.boolean().optional(),
    vendedor: z.boolean().optional(),
    productoId: z.boolean().optional(),
    producto: z.boolean().optional(),
    carritoItems: z.boolean().optional(),
    pedidoItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PublicacionFindFirstOrThrowSchema: z.ZodType<Prisma.PublicacionFindFirstOrThrowArgs> = z.object({ select: PublicacionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PublicacionIncludeObjectSchema.optional()), orderBy: z.union([PublicacionOrderByWithRelationInputObjectSchema, PublicacionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublicacionWhereInputObjectSchema.optional(), cursor: PublicacionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PublicacionScalarFieldEnumSchema, PublicacionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PublicacionFindFirstOrThrowArgs>;

export const PublicacionFindFirstOrThrowZodSchema = z.object({ select: PublicacionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PublicacionIncludeObjectSchema.optional()), orderBy: z.union([PublicacionOrderByWithRelationInputObjectSchema, PublicacionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublicacionWhereInputObjectSchema.optional(), cursor: PublicacionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PublicacionScalarFieldEnumSchema, PublicacionScalarFieldEnumSchema.array()]).optional() }).strict();