import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoUpdateWithoutEnvioInputObjectSchema as PedidoUpdateWithoutEnvioInputObjectSchema } from './PedidoUpdateWithoutEnvioInput.schema';
import { PedidoUncheckedUpdateWithoutEnvioInputObjectSchema as PedidoUncheckedUpdateWithoutEnvioInputObjectSchema } from './PedidoUncheckedUpdateWithoutEnvioInput.schema';
import { PedidoCreateWithoutEnvioInputObjectSchema as PedidoCreateWithoutEnvioInputObjectSchema } from './PedidoCreateWithoutEnvioInput.schema';
import { PedidoUncheckedCreateWithoutEnvioInputObjectSchema as PedidoUncheckedCreateWithoutEnvioInputObjectSchema } from './PedidoUncheckedCreateWithoutEnvioInput.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PedidoUpdateWithoutEnvioInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutEnvioInputObjectSchema)]),
  create: z.union([z.lazy(() => PedidoCreateWithoutEnvioInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutEnvioInputObjectSchema)]),
  where: z.lazy(() => PedidoWhereInputObjectSchema).optional()
}).strict();
export const PedidoUpsertWithoutEnvioInputObjectSchema: z.ZodType<Prisma.PedidoUpsertWithoutEnvioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpsertWithoutEnvioInput>;
export const PedidoUpsertWithoutEnvioInputObjectZodSchema = makeSchema();
