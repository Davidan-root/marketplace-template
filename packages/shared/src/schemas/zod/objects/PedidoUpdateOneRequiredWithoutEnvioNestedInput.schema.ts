import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoCreateWithoutEnvioInputObjectSchema as PedidoCreateWithoutEnvioInputObjectSchema } from './PedidoCreateWithoutEnvioInput.schema';
import { PedidoUncheckedCreateWithoutEnvioInputObjectSchema as PedidoUncheckedCreateWithoutEnvioInputObjectSchema } from './PedidoUncheckedCreateWithoutEnvioInput.schema';
import { PedidoCreateOrConnectWithoutEnvioInputObjectSchema as PedidoCreateOrConnectWithoutEnvioInputObjectSchema } from './PedidoCreateOrConnectWithoutEnvioInput.schema';
import { PedidoUpsertWithoutEnvioInputObjectSchema as PedidoUpsertWithoutEnvioInputObjectSchema } from './PedidoUpsertWithoutEnvioInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateToOneWithWhereWithoutEnvioInputObjectSchema as PedidoUpdateToOneWithWhereWithoutEnvioInputObjectSchema } from './PedidoUpdateToOneWithWhereWithoutEnvioInput.schema';
import { PedidoUpdateWithoutEnvioInputObjectSchema as PedidoUpdateWithoutEnvioInputObjectSchema } from './PedidoUpdateWithoutEnvioInput.schema';
import { PedidoUncheckedUpdateWithoutEnvioInputObjectSchema as PedidoUncheckedUpdateWithoutEnvioInputObjectSchema } from './PedidoUncheckedUpdateWithoutEnvioInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoCreateWithoutEnvioInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutEnvioInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PedidoCreateOrConnectWithoutEnvioInputObjectSchema).optional(),
  upsert: z.lazy(() => PedidoUpsertWithoutEnvioInputObjectSchema).optional(),
  connect: z.lazy(() => PedidoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PedidoUpdateToOneWithWhereWithoutEnvioInputObjectSchema), z.lazy(() => PedidoUpdateWithoutEnvioInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutEnvioInputObjectSchema)]).optional()
}).strict();
export const PedidoUpdateOneRequiredWithoutEnvioNestedInputObjectSchema: z.ZodType<Prisma.PedidoUpdateOneRequiredWithoutEnvioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateOneRequiredWithoutEnvioNestedInput>;
export const PedidoUpdateOneRequiredWithoutEnvioNestedInputObjectZodSchema = makeSchema();
