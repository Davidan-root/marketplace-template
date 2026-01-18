import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoScalarWhereInputObjectSchema as PagoScalarWhereInputObjectSchema } from './PagoScalarWhereInput.schema';
import { PagoUpdateManyMutationInputObjectSchema as PagoUpdateManyMutationInputObjectSchema } from './PagoUpdateManyMutationInput.schema';
import { PagoUncheckedUpdateManyWithoutPedidoInputObjectSchema as PagoUncheckedUpdateManyWithoutPedidoInputObjectSchema } from './PagoUncheckedUpdateManyWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PagoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PagoUpdateManyMutationInputObjectSchema), z.lazy(() => PagoUncheckedUpdateManyWithoutPedidoInputObjectSchema)])
}).strict();
export const PagoUpdateManyWithWhereWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PagoUpdateManyWithWhereWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoUpdateManyWithWhereWithoutPedidoInput>;
export const PagoUpdateManyWithWhereWithoutPedidoInputObjectZodSchema = makeSchema();
