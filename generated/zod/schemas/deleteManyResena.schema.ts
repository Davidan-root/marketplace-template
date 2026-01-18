import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './objects/ResenaWhereInput.schema';

export const ResenaDeleteManySchema: z.ZodType<Prisma.ResenaDeleteManyArgs> = z.object({ where: ResenaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResenaDeleteManyArgs>;

export const ResenaDeleteManyZodSchema = z.object({ where: ResenaWhereInputObjectSchema.optional() }).strict();