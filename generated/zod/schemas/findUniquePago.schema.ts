import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PagoSelectObjectSchema as PagoSelectObjectSchema } from './objects/PagoSelect.schema';
import { PagoIncludeObjectSchema as PagoIncludeObjectSchema } from './objects/PagoInclude.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './objects/PagoWhereUniqueInput.schema';

export const PagoFindUniqueSchema: z.ZodType<Prisma.PagoFindUniqueArgs> = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), where: PagoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PagoFindUniqueArgs>;

export const PagoFindUniqueZodSchema = z.object({ select: PagoSelectObjectSchema.optional(), include: PagoIncludeObjectSchema.optional(), where: PagoWhereUniqueInputObjectSchema }).strict();