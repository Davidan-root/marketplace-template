import * as z from 'zod';
export const PedidoItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.bigint(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  pedidoId: z.bigint(),
  pedido: z.unknown(),
  publicacionId: z.bigint(),
  publicacion: z.unknown()
}));