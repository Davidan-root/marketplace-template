import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateWithoutUsuarioInputObjectSchema as PedidoUpdateWithoutUsuarioInputObjectSchema } from './PedidoUpdateWithoutUsuarioInput.schema';
import { PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema as PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedUpdateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PedidoUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema)])
}).strict();
export const PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoUpdateWithWhereUniqueWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateWithWhereUniqueWithoutUsuarioInput>;
export const PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
