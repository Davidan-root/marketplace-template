import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PagoSelectObjectSchema as PagoSelectObjectSchema } from './objects/PagoSelect.schema';
import { PagoIncludeObjectSchema as PagoIncludeObjectSchema } from './objects/PagoInclude.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './objects/PagoWhereUniqueInput.schema';

export const PagoDeleteOneSchema: z.ZodType<Prisma.PagoDeleteArgs> = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), where: PagoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PagoDeleteArgs>;

export const PagoDeleteOneZodSchema = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), where: PagoWhereUniqueInputObjectSchema }).strict();