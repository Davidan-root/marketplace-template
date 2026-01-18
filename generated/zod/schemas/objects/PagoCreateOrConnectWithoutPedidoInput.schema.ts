import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './PagoWhereUniqueInput.schema';
import { PagoCreateWithoutPedidoInputObjectSchema as PagoCreateWithoutPedidoInputObjectSchema } from './PagoCreateWithoutPedidoInput.schema';
import { PagoUncheckedCreateWithoutPedidoInputObjectSchema as PagoUncheckedCreateWithoutPedidoInputObjectSchema } from './PagoUncheckedCreateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PagoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PagoCreateWithoutPedidoInputObjectSchema), z.lazy(() => PagoUncheckedCreateWithoutPedidoInputObjectSchema)])
}).strict();
export const PagoCreateOrConnectWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PagoCreateOrConnectWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoCreateOrConnectWithoutPedidoInput>;
export const PagoCreateOrConnectWithoutPedidoInputObjectZodSchema = makeSchema();
