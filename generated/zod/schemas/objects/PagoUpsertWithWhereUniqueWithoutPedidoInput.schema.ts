import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './PagoWhereUniqueInput.schema';
import { PagoUpdateWithoutPedidoInputObjectSchema as PagoUpdateWithoutPedidoInputObjectSchema } from './PagoUpdateWithoutPedidoInput.schema';
import { PagoUncheckedUpdateWithoutPedidoInputObjectSchema as PagoUncheckedUpdateWithoutPedidoInputObjectSchema } from './PagoUncheckedUpdateWithoutPedidoInput.schema';
import { PagoCreateWithoutPedidoInputObjectSchema as PagoCreateWithoutPedidoInputObjectSchema } from './PagoCreateWithoutPedidoInput.schema';
import { PagoUncheckedCreateWithoutPedidoInputObjectSchema as PagoUncheckedCreateWithoutPedidoInputObjectSchema } from './PagoUncheckedCreateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PagoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PagoUpdateWithoutPedidoInputObjectSchema), z.lazy(() => PagoUncheckedUpdateWithoutPedidoInputObjectSchema)]),
  create: z.union([z.lazy(() => PagoCreateWithoutPedidoInputObjectSchema), z.lazy(() => PagoUncheckedCreateWithoutPedidoInputObjectSchema)])
}).strict();
export const PagoUpsertWithWhereUniqueWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PagoUpsertWithWhereUniqueWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoUpsertWithWhereUniqueWithoutPedidoInput>;
export const PagoUpsertWithWhereUniqueWithoutPedidoInputObjectZodSchema = makeSchema();
