import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCreateWithoutEnvioInputObjectSchema as PedidoCreateWithoutEnvioInputObjectSchema } from './PedidoCreateWithoutEnvioInput.schema';
import { PedidoUncheckedCreateWithoutEnvioInputObjectSchema as PedidoUncheckedCreateWithoutEnvioInputObjectSchema } from './PedidoUncheckedCreateWithoutEnvioInput.schema';
import { PedidoCreateOrConnectWithoutEnvioInputObjectSchema as PedidoCreateOrConnectWithoutEnvioInputObjectSchema } from './PedidoCreateOrConnectWithoutEnvioInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoCreateWithoutEnvioInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutEnvioInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PedidoCreateOrConnectWithoutEnvioInputObjectSchema).optional(),
  connect: z.lazy(() => PedidoWhereUniqueInputObjectSchema).optional()
}).strict();
export const PedidoCreateNestedOneWithoutEnvioInputObjectSchema: z.ZodType<Prisma.PedidoCreateNestedOneWithoutEnvioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateNestedOneWithoutEnvioInput>;
export const PedidoCreateNestedOneWithoutEnvioInputObjectZodSchema = makeSchema();
