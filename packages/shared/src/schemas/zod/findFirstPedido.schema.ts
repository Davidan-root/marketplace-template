import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoIncludeObjectSchema as PedidoIncludeObjectSchema } from './objects/PedidoInclude.schema';
import { PedidoOrderByWithRelationInputObjectSchema as PedidoOrderByWithRelationInputObjectSchema } from './objects/PedidoOrderByWithRelationInput.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';
import { PedidoScalarFieldEnumSchema } from './enums/PedidoScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PedidoFindFirstSelectSchema: z.ZodType<Prisma.PedidoSelect> = z.object({
    id: z.boolean().optional(),
    fechaHoraAlta: z.boolean().optional(),
    numeroPedido: z.boolean().optional(),
    totalPrecio: z.boolean().optional(),
    usuarioId: z.boolean().optional(),
    usuario: z.boolean().optional(),
    pedidoItems: z.boolean().optional(),
    pagos: z.boolean().optional(),
    envio: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PedidoSelect>;

export const PedidoFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    fechaHoraAlta: z.boolean().optional(),
    numeroPedido: z.boolean().optional(),
    totalPrecio: z.boolean().optional(),
    usuarioId: z.boolean().optional(),
    usuario: z.boolean().optional(),
    pedidoItems: z.boolean().optional(),
    pagos: z.boolean().optional(),
    envio: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PedidoFindFirstSchema: z.ZodType<Prisma.PedidoFindFirstArgs> = z.object({ select: PedidoFindFirstSelectSchema.optional(), include: z.lazy(() => PedidoIncludeObjectSchema.optional()), orderBy: z.union([PedidoOrderByWithRelationInputObjectSchema, PedidoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoWhereInputObjectSchema.optional(), cursor: PedidoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PedidoScalarFieldEnumSchema, PedidoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PedidoFindFirstArgs>;

export const PedidoFindFirstZodSchema = z.object({ select: PedidoFindFirstSelectSchema.optional(), include: z.lazy(() => PedidoIncludeObjectSchema.optional()), orderBy: z.union([PedidoOrderByWithRelationInputObjectSchema, PedidoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoWhereInputObjectSchema.optional(), cursor: PedidoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PedidoScalarFieldEnumSchema, PedidoScalarFieldEnumSchema.array()]).optional() }).strict();