import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from './UsuarioOrderByWithRelationInput.schema';
import { PedidoItemOrderByRelationAggregateInputObjectSchema as PedidoItemOrderByRelationAggregateInputObjectSchema } from './PedidoItemOrderByRelationAggregateInput.schema';
import { PagoOrderByRelationAggregateInputObjectSchema as PagoOrderByRelationAggregateInputObjectSchema } from './PagoOrderByRelationAggregateInput.schema';
import { EnvioOrderByWithRelationInputObjectSchema as EnvioOrderByWithRelationInputObjectSchema } from './EnvioOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  numeroPedido: SortOrderSchema.optional(),
  totalPrecio: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional(),
  usuario: z.lazy(() => UsuarioOrderByWithRelationInputObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemOrderByRelationAggregateInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoOrderByRelationAggregateInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PedidoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PedidoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoOrderByWithRelationInput>;
export const PedidoOrderByWithRelationInputObjectZodSchema = makeSchema();
