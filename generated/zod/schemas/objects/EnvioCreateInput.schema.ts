import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCreateNestedOneWithoutEnvioInputObjectSchema as PedidoCreateNestedOneWithoutEnvioInputObjectSchema } from './PedidoCreateNestedOneWithoutEnvioInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  estadoEnvio: z.string(),
  numeroEnvio: z.number().int(),
  pedido: z.lazy(() => PedidoCreateNestedOneWithoutEnvioInputObjectSchema)
}).strict();
export const EnvioCreateInputObjectSchema: z.ZodType<Prisma.EnvioCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioCreateInput>;
export const EnvioCreateInputObjectZodSchema = makeSchema();
