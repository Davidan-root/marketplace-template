import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EnvioIncludeObjectSchema as EnvioIncludeObjectSchema } from './objects/EnvioInclude.schema';
import { EnvioOrderByWithRelationInputObjectSchema as EnvioOrderByWithRelationInputObjectSchema } from './objects/EnvioOrderByWithRelationInput.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './objects/EnvioWhereInput.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './objects/EnvioWhereUniqueInput.schema';
import { EnvioScalarFieldEnumSchema } from './enums/EnvioScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnvioFindManySelectSchema: z.ZodType<Prisma.EnvioSelect> = z.object({
    id: z.boolean().optional(),
    estadoEnvio: z.boolean().optional(),
    numeroEnvio: z.boolean().optional(),
    pedidoId: z.boolean().optional(),
    pedido: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EnvioSelect>;

export const EnvioFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    estadoEnvio: z.boolean().optional(),
    numeroEnvio: z.boolean().optional(),
    pedidoId: z.boolean().optional(),
    pedido: z.boolean().optional()
  }).strict();

export const EnvioFindManySchema: z.ZodType<Prisma.EnvioFindManyArgs> = z.object({ select: EnvioFindManySelectSchema.optional(), include: z.lazy(() => EnvioIncludeObjectSchema.optional()), orderBy: z.union([EnvioOrderByWithRelationInputObjectSchema, EnvioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EnvioWhereInputObjectSchema.optional(), cursor: EnvioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EnvioScalarFieldEnumSchema, EnvioScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EnvioFindManyArgs>;

export const EnvioFindManyZodSchema = z.object({ select: EnvioFindManySelectSchema.optional(), include: z.lazy(() => EnvioIncludeObjectSchema.optional()), orderBy: z.union([EnvioOrderByWithRelationInputObjectSchema, EnvioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EnvioWhereInputObjectSchema.optional(), cursor: EnvioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EnvioScalarFieldEnumSchema, EnvioScalarFieldEnumSchema.array()]).optional() }).strict();