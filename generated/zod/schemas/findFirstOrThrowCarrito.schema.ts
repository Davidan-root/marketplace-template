import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoIncludeObjectSchema as CarritoIncludeObjectSchema } from './objects/CarritoInclude.schema';
import { CarritoOrderByWithRelationInputObjectSchema as CarritoOrderByWithRelationInputObjectSchema } from './objects/CarritoOrderByWithRelationInput.schema';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './objects/CarritoWhereInput.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './objects/CarritoWhereUniqueInput.schema';
import { CarritoScalarFieldEnumSchema } from './enums/CarritoScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CarritoFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CarritoSelect> = z.object({
    id: z.boolean().optional(),
    fechaHoraAlta: z.boolean().optional(),
    fechaHoraBaja: z.boolean().optional(),
    fechaHoraModificacion: z.boolean().optional(),
    usuarioId: z.boolean().optional(),
    usuario: z.boolean().optional(),
    carritoItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CarritoSelect>;

export const CarritoFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    fechaHoraAlta: z.boolean().optional(),
    fechaHoraBaja: z.boolean().optional(),
    fechaHoraModificacion: z.boolean().optional(),
    usuarioId: z.boolean().optional(),
    usuario: z.boolean().optional(),
    carritoItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CarritoFindFirstOrThrowSchema: z.ZodType<Prisma.CarritoFindFirstOrThrowArgs> = z.object({ select: CarritoFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CarritoIncludeObjectSchema.optional()), orderBy: z.union([CarritoOrderByWithRelationInputObjectSchema, CarritoOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoWhereInputObjectSchema.optional(), cursor: CarritoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CarritoScalarFieldEnumSchema, CarritoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CarritoFindFirstOrThrowArgs>;

export const CarritoFindFirstOrThrowZodSchema = z.object({ select: CarritoFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CarritoIncludeObjectSchema.optional()), orderBy: z.union([CarritoOrderByWithRelationInputObjectSchema, CarritoOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoWhereInputObjectSchema.optional(), cursor: CarritoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CarritoScalarFieldEnumSchema, CarritoScalarFieldEnumSchema.array()]).optional() }).strict();