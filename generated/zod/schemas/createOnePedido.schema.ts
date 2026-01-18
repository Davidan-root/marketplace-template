import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoSelectObjectSchema as PedidoSelectObjectSchema } from './objects/PedidoSelect.schema';
import { PedidoIncludeObjectSchema as PedidoIncludeObjectSchema } from './objects/PedidoInclude.schema';
import { PedidoCreateInputObjectSchema as PedidoCreateInputObjectSchema } from './objects/PedidoCreateInput.schema';
import { PedidoUncheckedCreateInputObjectSchema as PedidoUncheckedCreateInputObjectSchema } from './objects/PedidoUncheckedCreateInput.schema';

export const PedidoCreateOneSchema: z.ZodType<Prisma.PedidoCreateArgs> = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), data: z.union([PedidoCreateInputObjectSchema, PedidoUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PedidoCreateArgs>;

export const PedidoCreateOneZodSchema = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), data: z.union([PedidoCreateInputObjectSchema, PedidoUncheckedCreateInputObjectSchema]) }).strict();