import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoCreateWithoutPagosInputObjectSchema as PedidoCreateWithoutPagosInputObjectSchema } from './PedidoCreateWithoutPagosInput.schema';
import { PedidoUncheckedCreateWithoutPagosInputObjectSchema as PedidoUncheckedCreateWithoutPagosInputObjectSchema } from './PedidoUncheckedCreateWithoutPagosInput.schema';
import { PedidoCreateOrConnectWithoutPagosInputObjectSchema as PedidoCreateOrConnectWithoutPagosInputObjectSchema } from './PedidoCreateOrConnectWithoutPagosInput.schema';
import { PedidoUpsertWithoutPagosInputObjectSchema as PedidoUpsertWithoutPagosInputObjectSchema } from './PedidoUpsertWithoutPagosInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateToOneWithWhereWithoutPagosInputObjectSchema as PedidoUpdateToOneWithWhereWithoutPagosInputObjectSchema } from './PedidoUpdateToOneWithWhereWithoutPagosInput.schema';
import { PedidoUpdateWithoutPagosInputObjectSchema as PedidoUpdateWithoutPagosInputObjectSchema } from './PedidoUpdateWithoutPagosInput.schema';
import { PedidoUncheckedUpdateWithoutPagosInputObjectSchema as PedidoUncheckedUpdateWithoutPagosInputObjectSchema } from './PedidoUncheckedUpdateWithoutPagosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoCreateWithoutPagosInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutPagosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PedidoCreateOrConnectWithoutPagosInputObjectSchema).optional(),
  upsert: z.lazy(() => PedidoUpsertWithoutPagosInputObjectSchema).optional(),
  connect: z.lazy(() => PedidoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PedidoUpdateToOneWithWhereWithoutPagosInputObjectSchema), z.lazy(() => PedidoUpdateWithoutPagosInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutPagosInputObjectSchema)]).optional()
}).strict();
export const PedidoUpdateOneRequiredWithoutPagosNestedInputObjectSchema: z.ZodType<Prisma.PedidoUpdateOneRequiredWithoutPagosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateOneRequiredWithoutPagosNestedInput>;
export const PedidoUpdateOneRequiredWithoutPagosNestedInputObjectZodSchema = makeSchema();
