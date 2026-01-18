import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoScalarWhereInputObjectSchema as PedidoScalarWhereInputObjectSchema } from './PedidoScalarWhereInput.schema';
import { PedidoUpdateManyMutationInputObjectSchema as PedidoUpdateManyMutationInputObjectSchema } from './PedidoUpdateManyMutationInput.schema';
import { PedidoUncheckedUpdateManyWithoutUsuarioInputObjectSchema as PedidoUncheckedUpdateManyWithoutUsuarioInputObjectSchema } from './PedidoUncheckedUpdateManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PedidoUpdateManyMutationInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateManyWithoutUsuarioInputObjectSchema)])
}).strict();
export const PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoUpdateManyWithWhereWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateManyWithWhereWithoutUsuarioInput>;
export const PedidoUpdateManyWithWhereWithoutUsuarioInputObjectZodSchema = makeSchema();
