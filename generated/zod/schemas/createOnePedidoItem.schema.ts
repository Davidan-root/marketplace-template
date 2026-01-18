import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoItemSelectObjectSchema as PedidoItemSelectObjectSchema } from './objects/PedidoItemSelect.schema';
import { PedidoItemIncludeObjectSchema as PedidoItemIncludeObjectSchema } from './objects/PedidoItemInclude.schema';
import { PedidoItemCreateInputObjectSchema as PedidoItemCreateInputObjectSchema } from './objects/PedidoItemCreateInput.schema';
import { PedidoItemUncheckedCreateInputObjectSchema as PedidoItemUncheckedCreateInputObjectSchema } from './objects/PedidoItemUncheckedCreateInput.schema';

export const PedidoItemCreateOneSchema: z.ZodType<Prisma.PedidoItemCreateArgs> = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), data: z.union([PedidoItemCreateInputObjectSchema, PedidoItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PedidoItemCreateArgs>;

export const PedidoItemCreateOneZodSchema = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), data: z.union([PedidoItemCreateInputObjectSchema, PedidoItemUncheckedCreateInputObjectSchema]) }).strict();