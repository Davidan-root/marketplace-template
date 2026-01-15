import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendedorOrderByWithRelationInputObjectSchema as VendedorOrderByWithRelationInputObjectSchema } from './VendedorOrderByWithRelationInput.schema';
import { ProductoOrderByWithRelationInputObjectSchema as ProductoOrderByWithRelationInputObjectSchema } from './ProductoOrderByWithRelationInput.schema';
import { CarritoItemOrderByRelationAggregateInputObjectSchema as CarritoItemOrderByRelationAggregateInputObjectSchema } from './CarritoItemOrderByRelationAggregateInput.schema';
import { PedidoItemOrderByRelationAggregateInputObjectSchema as PedidoItemOrderByRelationAggregateInputObjectSchema } from './PedidoItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  condicionesVenta: SortOrderSchema.optional(),
  enviosVenta: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional(),
  stockVenta: SortOrderSchema.optional(),
  vendedorId: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional(),
  vendedor: z.lazy(() => VendedorOrderByWithRelationInputObjectSchema).optional(),
  producto: z.lazy(() => ProductoOrderByWithRelationInputObjectSchema).optional(),
  carritoItems: z.lazy(() => CarritoItemOrderByRelationAggregateInputObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PublicacionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PublicacionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionOrderByWithRelationInput>;
export const PublicacionOrderByWithRelationInputObjectZodSchema = makeSchema();
