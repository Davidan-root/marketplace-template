import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './PagoWhereUniqueInput.schema';
import { PagoUpdateWithoutPedidoInputObjectSchema as PagoUpdateWithoutPedidoInputObjectSchema } from './PagoUpdateWithoutPedidoInput.schema';
import { PagoUncheckedUpdateWithoutPedidoInputObjectSchema as PagoUncheckedUpdateWithoutPedidoInputObjectSchema } from './PagoUncheckedUpdateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PagoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PagoUpdateWithoutPedidoInputObjectSchema), z.lazy(() => PagoUncheckedUpdateWithoutPedidoInputObjectSchema)])
}).strict();
export const PagoUpdateWithWhereUniqueWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PagoUpdateWithWhereUniqueWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoUpdateWithWhereUniqueWithoutPedidoInput>;
export const PagoUpdateWithWhereUniqueWithoutPedidoInputObjectZodSchema = makeSchema();
