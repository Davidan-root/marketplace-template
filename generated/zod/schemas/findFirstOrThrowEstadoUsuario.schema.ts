import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioIncludeObjectSchema as EstadoUsuarioIncludeObjectSchema } from './objects/EstadoUsuarioInclude.schema';
import { EstadoUsuarioOrderByWithRelationInputObjectSchema as EstadoUsuarioOrderByWithRelationInputObjectSchema } from './objects/EstadoUsuarioOrderByWithRelationInput.schema';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './objects/EstadoUsuarioWhereInput.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './objects/EstadoUsuarioWhereUniqueInput.schema';
import { EstadoUsuarioScalarFieldEnumSchema } from './enums/EstadoUsuarioScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EstadoUsuarioFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EstadoUsuarioSelect> = z.object({
    id: z.boolean().optional(),
    descripcionEU: z.boolean().optional(),
    nombreEU: z.boolean().optional(),
    usuarios: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioSelect>;

export const EstadoUsuarioFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    descripcionEU: z.boolean().optional(),
    nombreEU: z.boolean().optional(),
    usuarios: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EstadoUsuarioFindFirstOrThrowSchema: z.ZodType<Prisma.EstadoUsuarioFindFirstOrThrowArgs> = z.object({ select: EstadoUsuarioFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EstadoUsuarioIncludeObjectSchema.optional()), orderBy: z.union([EstadoUsuarioOrderByWithRelationInputObjectSchema, EstadoUsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EstadoUsuarioWhereInputObjectSchema.optional(), cursor: EstadoUsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EstadoUsuarioScalarFieldEnumSchema, EstadoUsuarioScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioFindFirstOrThrowArgs>;

export const EstadoUsuarioFindFirstOrThrowZodSchema = z.object({ select: EstadoUsuarioFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EstadoUsuarioIncludeObjectSchema.optional()), orderBy: z.union([EstadoUsuarioOrderByWithRelationInputObjectSchema, EstadoUsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EstadoUsuarioWhereInputObjectSchema.optional(), cursor: EstadoUsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EstadoUsuarioScalarFieldEnumSchema, EstadoUsuarioScalarFieldEnumSchema.array()]).optional() }).strict();