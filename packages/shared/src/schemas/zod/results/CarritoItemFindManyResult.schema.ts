import * as z from 'zod';
export const CarritoItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.bigint(),
  cantidadCI: z.number().int(),
  carritoId: z.bigint(),
  carrito: z.unknown(),
  publicacionId: z.bigint(),
  publicacion: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});