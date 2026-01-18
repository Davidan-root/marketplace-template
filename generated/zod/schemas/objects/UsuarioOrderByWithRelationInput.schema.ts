import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EstadoUsuarioOrderByWithRelationInputObjectSchema as EstadoUsuarioOrderByWithRelationInputObjectSchema } from './EstadoUsuarioOrderByWithRelationInput.schema';
import { VendedorOrderByWithRelationInputObjectSchema as VendedorOrderByWithRelationInputObjectSchema } from './VendedorOrderByWithRelationInput.schema';
import { CarritoOrderByRelationAggregateInputObjectSchema as CarritoOrderByRelationAggregateInputObjectSchema } from './CarritoOrderByRelationAggregateInput.schema';
import { PedidoOrderByRelationAggregateInputObjectSchema as PedidoOrderByRelationAggregateInputObjectSchema } from './PedidoOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  direccionUsuario: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  nombreUsuario: SortOrderSchema.optional(),
  numeroContacto: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  estadoUsuarioId: SortOrderSchema.optional(),
  estadoUsuario: z.lazy(() => EstadoUsuarioOrderByWithRelationInputObjectSchema).optional(),
  vendedor: z.lazy(() => VendedorOrderByWithRelationInputObjectSchema).optional(),
  carritos: z.lazy(() => CarritoOrderByRelationAggregateInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UsuarioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UsuarioOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioOrderByWithRelationInput>;
export const UsuarioOrderByWithRelationInputObjectZodSchema = makeSchema();
