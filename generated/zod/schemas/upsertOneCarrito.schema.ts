import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoSelectObjectSchema as CarritoSelectObjectSchema } from './objects/CarritoSelect.schema';
import { CarritoIncludeObjectSchema as CarritoIncludeObjectSchema } from './objects/CarritoInclude.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './objects/CarritoWhereUniqueInput.schema';
import { CarritoCreateInputObjectSchema as CarritoCreateInputObjectSchema } from './objects/CarritoCreateInput.schema';
import { CarritoUncheckedCreateInputObjectSchema as CarritoUncheckedCreateInputObjectSchema } from './objects/CarritoUncheckedCreateInput.schema';
import { CarritoUpdateInputObjectSchema as CarritoUpdateInputObjectSchema } from './objects/CarritoUpdateInput.schema';
import { CarritoUncheckedUpdateInputObjectSchema as CarritoUncheckedUpdateInputObjectSchema } from './objects/CarritoUncheckedUpdateInput.schema';

export const CarritoUpsertOneSchema: z.ZodType<Prisma.CarritoUpsertArgs> = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), where: CarritoWhereUniqueInputObjectSchema, create: z.union([ CarritoCreateInputObjectSchema, CarritoUncheckedCreateInputObjectSchema ]), update: z.union([ CarritoUpdateInputObjectSchema, CarritoUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CarritoUpsertArgs>;

export const CarritoUpsertOneZodSchema = z.object({ select: CarritoSelectObjectSchema.optional(), include: CarritoIncludeObjectSchema.optional(), where: CarritoWhereUniqueInputObjectSchema, create: z.union([ CarritoCreateInputObjectSchema, CarritoUncheckedCreateInputObjectSchema ]), update: z.union([ CarritoUpdateInputObjectSchema, CarritoUncheckedUpdateInputObjectSchema ]) }).strict();