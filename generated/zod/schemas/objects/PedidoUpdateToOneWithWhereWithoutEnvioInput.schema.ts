import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema';
import { PedidoUpdateWithoutEnvioInputObjectSchema as PedidoUpdateWithoutEnvioInputObjectSchema } from './PedidoUpdateWithoutEnvioInput.schema';
import { PedidoUncheckedUpdateWithoutEnvioInputObjectSchema as PedidoUncheckedUpdateWithoutEnvioInputObjectSchema } from './PedidoUncheckedUpdateWithoutEnvioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PedidoUpdateWithoutEnvioInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutEnvioInputObjectSchema)])
}).strict();
export const PedidoUpdateToOneWithWhereWithoutEnvioInputObjectSchema: z.ZodType<Prisma.PedidoUpdateToOneWithWhereWithoutEnvioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateToOneWithWhereWithoutEnvioInput>;
export const PedidoUpdateToOneWithWhereWithoutEnvioInputObjectZodSchema = makeSchema();
