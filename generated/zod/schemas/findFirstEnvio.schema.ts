import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EnvioIncludeObjectSchema as EnvioIncludeObjectSchema } from './objects/EnvioInclude.schema';
import { EnvioOrderByWithRelationInputObjectSchema as EnvioOrderByWithRelationInputObjectSchema } from './objects/EnvioOrderByWithRelationInput.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './objects/EnvioWhereInput.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './objects/EnvioWhereUniqueInput.schema';
import { EnvioScalarFieldEnumSchema } from './enums/EnvioScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnvioFindFirstSelectSchema: z.ZodType<Prisma.EnvioSelect> = z.object({
    id: z.boolean().optional(),
    estadoEnvio: z.boolean().optional(),
    numeroEnvio: z.boolean().optional(),
    pedidoId: z.boolean().optional(),
    pedido: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EnvioSelect>;

export const EnvioFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    estadoEnvio: z.boolean().optional(),
    numeroEnvio: z.boolean().optional(),
    pedidoId: z.boolean().optional(),
    pedido: z.boolean().optional()
  }).strict();

export const EnvioFindFirstSchema: z.ZodType<Prisma.EnvioFindFirstArgs> = z.object({ select: EnvioFindFirstSelectSchema.optional(), include: z.lazy(() => EnvioIncludeObjectSchema.optional()), orderBy: z.union([EnvioOrderByWithRelationInputObjectSchema, EnvioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EnvioWhereInputObjectSchema.optional(), cursor: EnvioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EnvioScalarFieldEnumSchema, EnvioScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EnvioFindFirstArgs>;

export const EnvioFindFirstZodSchema = z.object({ select: EnvioFindFirstSelectSchema.optional(), include: z.lazy(() => EnvioIncludeObjectSchema.optional()), orderBy: z.union([EnvioOrderByWithRelationInputObjectSchema, EnvioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EnvioWhereInputObjectSchema.optional(), cursor: EnvioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EnvioScalarFieldEnumSchema, EnvioScalarFieldEnumSchema.array()]).optional() }).strict();