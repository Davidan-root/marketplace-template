import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoCreateWithoutEnvioInputObjectSchema as PedidoCreateWithoutEnvioInputObjectSchema } from './PedidoCreateWithoutEnvioInput.schema';
import { PedidoUncheckedCreateWithoutEnvioInputObjectSchema as PedidoUncheckedCreateWithoutEnvioInputObjectSchema } from './PedidoUncheckedCreateWithoutEnvioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PedidoCreateWithoutEnvioInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutEnvioInputObjectSchema)])
}).strict();
export const PedidoCreateOrConnectWithoutEnvioInputObjectSchema: z.ZodType<Prisma.PedidoCreateOrConnectWithoutEnvioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateOrConnectWithoutEnvioInput>;
export const PedidoCreateOrConnectWithoutEnvioInputObjectZodSchema = makeSchema();
