import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PagoSelectObjectSchema as PagoSelectObjectSchema } from './objects/PagoSelect.schema';
import { PagoUpdateManyMutationInputObjectSchema as PagoUpdateManyMutationInputObjectSchema } from './objects/PagoUpdateManyMutationInput.schema';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './objects/PagoWhereInput.schema';

export const PagoUpdateManyAndReturnSchema: z.ZodType<Prisma.PagoUpdateManyAndReturnArgs> = z.object({ select: PagoSelectObjectSchema.optional(), data: PagoUpdateManyMutationInputObjectSchema, where: PagoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PagoUpdateManyAndReturnArgs>;

export const PagoUpdateManyAndReturnZodSchema = z.object({ select: PagoSelectObjectSchema.optional(), data: PagoUpdateManyMutationInputObjectSchema, where: PagoWhereInputObjectSchema.optional() }).strict();