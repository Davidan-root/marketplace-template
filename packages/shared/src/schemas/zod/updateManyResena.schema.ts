import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResenaUpdateManyMutationInputObjectSchema as ResenaUpdateManyMutationInputObjectSchema } from './objects/ResenaUpdateManyMutationInput.schema';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './objects/ResenaWhereInput.schema';

export const ResenaUpdateManySchema: z.ZodType<Prisma.ResenaUpdateManyArgs> = z.object({ data: ResenaUpdateManyMutationInputObjectSchema, where: ResenaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResenaUpdateManyArgs>;

export const ResenaUpdateManyZodSchema = z.object({ data: ResenaUpdateManyMutationInputObjectSchema, where: ResenaWhereInputObjectSchema.optional() }).strict();