import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './objects/ResenaInclude.schema';
import { ResenaOrderByWithRelationInputObjectSchema as ResenaOrderByWithRelationInputObjectSchema } from './objects/ResenaOrderByWithRelationInput.schema';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './objects/ResenaWhereInput.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';
import { ResenaScalarFieldEnumSchema } from './enums/ResenaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResenaFindManySelectSchema: z.ZodType<Prisma.ResenaSelect> = z.object({
    id: z.boolean().optional(),
    comentario: z.boolean().optional(),
    fechaHoraAlta: z.boolean().optional(),
    puntaje: z.boolean().optional(),
    productoId: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResenaSelect>;

export const ResenaFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    comentario: z.boolean().optional(),
    fechaHoraAlta: z.boolean().optional(),
    puntaje: z.boolean().optional(),
    productoId: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict();

export const ResenaFindManySchema: z.ZodType<Prisma.ResenaFindManyArgs> = z.object({ select: ResenaFindManySelectSchema.optional(), include: z.lazy(() => ResenaIncludeObjectSchema.optional()), orderBy: z.union([ResenaOrderByWithRelationInputObjectSchema, ResenaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResenaWhereInputObjectSchema.optional(), cursor: ResenaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResenaScalarFieldEnumSchema, ResenaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResenaFindManyArgs>;

export const ResenaFindManyZodSchema = z.object({ select: ResenaFindManySelectSchema.optional(), include: z.lazy(() => ResenaIncludeObjectSchema.optional()), orderBy: z.union([ResenaOrderByWithRelationInputObjectSchema, ResenaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResenaWhereInputObjectSchema.optional(), cursor: ResenaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResenaScalarFieldEnumSchema, ResenaScalarFieldEnumSchema.array()]).optional() }).strict();