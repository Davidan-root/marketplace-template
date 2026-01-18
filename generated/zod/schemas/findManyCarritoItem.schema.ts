import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoItemIncludeObjectSchema as CarritoItemIncludeObjectSchema } from './objects/CarritoItemInclude.schema';
import { CarritoItemOrderByWithRelationInputObjectSchema as CarritoItemOrderByWithRelationInputObjectSchema } from './objects/CarritoItemOrderByWithRelationInput.schema';
import { CarritoItemWhereInputObjectSchema as CarritoItemWhereInputObjectSchema } from './objects/CarritoItemWhereInput.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './objects/CarritoItemWhereUniqueInput.schema';
import { CarritoItemScalarFieldEnumSchema } from './enums/CarritoItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CarritoItemFindManySelectSchema: z.ZodType<Prisma.CarritoItemSelect> = z.object({
    id: z.boolean().optional(),
    cantidadCI: z.boolean().optional(),
    carritoId: z.boolean().optional(),
    carrito: z.boolean().optional(),
    publicacionId: z.boolean().optional(),
    publicacion: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CarritoItemSelect>;

export const CarritoItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    cantidadCI: z.boolean().optional(),
    carritoId: z.boolean().optional(),
    carrito: z.boolean().optional(),
    publicacionId: z.boolean().optional(),
    publicacion: z.boolean().optional()
  }).strict();

export const CarritoItemFindManySchema: z.ZodType<Prisma.CarritoItemFindManyArgs> = z.object({ select: CarritoItemFindManySelectSchema.optional(), include: z.lazy(() => CarritoItemIncludeObjectSchema.optional()), orderBy: z.union([CarritoItemOrderByWithRelationInputObjectSchema, CarritoItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoItemWhereInputObjectSchema.optional(), cursor: CarritoItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CarritoItemScalarFieldEnumSchema, CarritoItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CarritoItemFindManyArgs>;

export const CarritoItemFindManyZodSchema = z.object({ select: CarritoItemFindManySelectSchema.optional(), include: z.lazy(() => CarritoItemIncludeObjectSchema.optional()), orderBy: z.union([CarritoItemOrderByWithRelationInputObjectSchema, CarritoItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoItemWhereInputObjectSchema.optional(), cursor: CarritoItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CarritoItemScalarFieldEnumSchema, CarritoItemScalarFieldEnumSchema.array()]).optional() }).strict();