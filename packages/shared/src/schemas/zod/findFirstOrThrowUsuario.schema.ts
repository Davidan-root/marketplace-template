import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from './objects/UsuarioInclude.schema';
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from './objects/UsuarioOrderByWithRelationInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';
import { UsuarioScalarFieldEnumSchema } from './enums/UsuarioScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsuarioFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UsuarioSelect> = z.object({
    id: z.boolean().optional(),
    direccionUsuario: z.boolean().optional(),
    email: z.boolean().optional(),
    nombreUsuario: z.boolean().optional(),
    numeroContacto: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    estadoUsuarioId: z.boolean().optional(),
    estadoUsuario: z.boolean().optional(),
    vendedor: z.boolean().optional(),
    carritos: z.boolean().optional(),
    pedidos: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UsuarioSelect>;

export const UsuarioFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    direccionUsuario: z.boolean().optional(),
    email: z.boolean().optional(),
    nombreUsuario: z.boolean().optional(),
    numeroContacto: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    estadoUsuarioId: z.boolean().optional(),
    estadoUsuario: z.boolean().optional(),
    vendedor: z.boolean().optional(),
    carritos: z.boolean().optional(),
    pedidos: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UsuarioFindFirstOrThrowSchema: z.ZodType<Prisma.UsuarioFindFirstOrThrowArgs> = z.object({ select: UsuarioFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UsuarioIncludeObjectSchema.optional()), orderBy: z.union([UsuarioOrderByWithRelationInputObjectSchema, UsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioWhereInputObjectSchema.optional(), cursor: UsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsuarioScalarFieldEnumSchema, UsuarioScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioFindFirstOrThrowArgs>;

export const UsuarioFindFirstOrThrowZodSchema = z.object({ select: UsuarioFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UsuarioIncludeObjectSchema.optional()), orderBy: z.union([UsuarioOrderByWithRelationInputObjectSchema, UsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioWhereInputObjectSchema.optional(), cursor: UsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsuarioScalarFieldEnumSchema, UsuarioScalarFieldEnumSchema.array()]).optional() }).strict();