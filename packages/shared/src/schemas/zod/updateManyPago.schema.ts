import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PagoUpdateManyMutationInputObjectSchema as PagoUpdateManyMutationInputObjectSchema } from './objects/PagoUpdateManyMutationInput.schema';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './objects/PagoWhereInput.schema';

export const PagoUpdateManySchema: z.ZodType<Prisma.PagoUpdateManyArgs> = z.object({ data: PagoUpdateManyMutationInputObjectSchema, where: PagoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PagoUpdateManyArgs>;

export const PagoUpdateManyZodSchema = z.object({ data: PagoUpdateManyMutationInputObjectSchema, where: PagoWhereInputObjectSchema.optional() }).strict();