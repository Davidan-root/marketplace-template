import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoItemIncludeObjectSchema as PedidoItemIncludeObjectSchema } from './objects/PedidoItemInclude.schema';
import { PedidoItemOrderByWithRelationInputObjectSchema as PedidoItemOrderByWithRelationInputObjectSchema } from './objects/PedidoItemOrderByWithRelationInput.schema';
import { PedidoItemWhereInputObjectSchema as PedidoItemWhereInputObjectSchema } from './objects/PedidoItemWhereInput.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './objects/PedidoItemWhereUniqueInput.schema';
import { PedidoItemScalarFieldEnumSchema } from './enums/PedidoItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PedidoItemFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PedidoItemSelect> = z.object({
    id: z.boolean().optional(),
    cantidadPI: z.boolean().optional(),
    precioUnitario: z.boolean().optional(),
    subtotalPI: z.boolean().optional(),
    pedidoId: z.boolean().optional(),
    pedido: z.boolean().optional(),
    publicacionId: z.boolean().optional(),
    publicacion: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PedidoItemSelect>;

export const PedidoItemFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    cantidadPI: z.boolean().optional(),
    precioUnitario: z.boolean().optional(),
    subtotalPI: z.boolean().optional(),
    pedidoId: z.boolean().optional(),
    pedido: z.boolean().optional(),
    publicacionId: z.boolean().optional(),
    publicacion: z.boolean().optional()
  }).strict();

export const PedidoItemFindFirstOrThrowSchema: z.ZodType<Prisma.PedidoItemFindFirstOrThrowArgs> = z.object({ select: PedidoItemFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PedidoItemIncludeObjectSchema.optional()), orderBy: z.union([PedidoItemOrderByWithRelationInputObjectSchema, PedidoItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoItemWhereInputObjectSchema.optional(), cursor: PedidoItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PedidoItemScalarFieldEnumSchema, PedidoItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PedidoItemFindFirstOrThrowArgs>;

export const PedidoItemFindFirstOrThrowZodSchema = z.object({ select: PedidoItemFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PedidoItemIncludeObjectSchema.optional()), orderBy: z.union([PedidoItemOrderByWithRelationInputObjectSchema, PedidoItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoItemWhereInputObjectSchema.optional(), cursor: PedidoItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PedidoItemScalarFieldEnumSchema, PedidoItemScalarFieldEnumSchema.array()]).optional() }).strict();