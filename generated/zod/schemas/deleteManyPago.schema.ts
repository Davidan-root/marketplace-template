import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './objects/PagoWhereInput.schema';

export const PagoDeleteManySchema: z.ZodType<Prisma.PagoDeleteManyArgs> = z.object({ where: PagoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PagoDeleteManyArgs>;

export const PagoDeleteManyZodSchema = z.object({ where: PagoWhereInputObjectSchema.optional() }).strict();