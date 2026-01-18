import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateWithoutUsuarioInputObjectSchema as PedidoUpdateWithoutUsuarioInputObjectSchema } from './PedidoUpdateWithoutUsuarioInput.schema';
import { PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema as PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedUpdateWithoutUsuarioInput.schema';
import { PedidoCreateWithoutUsuarioInputObjectSchema as PedidoCreateWithoutUsuarioInputObjectSchema } from './PedidoCreateWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateWithoutUsuarioInputObjectSchema as PedidoUncheckedCreateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PedidoUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
  create: z.union([z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoUpsertWithWhereUniqueWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpsertWithWhereUniqueWithoutUsuarioInput>;
export const PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
