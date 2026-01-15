import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './objects/ResenaInclude.schema';
import { ResenaOrderByWithRelationInputObjectSchema as ResenaOrderByWithRelationInputObjectSchema } from './objects/ResenaOrderByWithRelationInput.schema';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './objects/ResenaWhereInput.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';
import { ResenaScalarFieldEnumSchema } from './enums/ResenaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResenaFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ResenaSelect> = z.object({
    id: z.boolean().optional(),
    comentario: z.boolean().optional(),
    fechaHoraAlta: z.boolean().optional(),
    puntaje: z.boolean().optional(),
    productoId: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResenaSelect>;

export const ResenaFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    comentario: z.boolean().optional(),
    fechaHoraAlta: z.boolean().optional(),
    puntaje: z.boolean().optional(),
    productoId: z.boolean().optional(),
    producto: z.boolean().optional()
  }).strict();

export const ResenaFindFirstOrThrowSchema: z.ZodType<Prisma.ResenaFindFirstOrThrowArgs> = z.object({ select: ResenaFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ResenaIncludeObjectSchema.optional()), orderBy: z.union([ResenaOrderByWithRelationInputObjectSchema, ResenaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResenaWhereInputObjectSchema.optional(), cursor: ResenaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResenaScalarFieldEnumSchema, ResenaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResenaFindFirstOrThrowArgs>;

export const ResenaFindFirstOrThrowZodSchema = z.object({ select: ResenaFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ResenaIncludeObjectSchema.optional()), orderBy: z.union([ResenaOrderByWithRelationInputObjectSchema, ResenaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResenaWhereInputObjectSchema.optional(), cursor: ResenaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResenaScalarFieldEnumSchema, ResenaScalarFieldEnumSchema.array()]).optional() }).strict();