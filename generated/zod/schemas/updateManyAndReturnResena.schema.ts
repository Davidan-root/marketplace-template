import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './objects/ResenaSelect.schema';
import { ResenaUpdateManyMutationInputObjectSchema as ResenaUpdateManyMutationInputObjectSchema } from './objects/ResenaUpdateManyMutationInput.schema';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './objects/ResenaWhereInput.schema';

export const ResenaUpdateManyAndReturnSchema: z.ZodType<Prisma.ResenaUpdateManyAndReturnArgs> = z.object({ select: ResenaSelectObjectSchema.optional(), data: ResenaUpdateManyMutationInputObjectSchema, where: ResenaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResenaUpdateManyAndReturnArgs>;

export const ResenaUpdateManyAndReturnZodSchema = z.object({ select: ResenaSelectObjectSchema.optional(), data: ResenaUpdateManyMutationInputObjectSchema, where: ResenaWhereInputObjectSchema.optional() }).strict();