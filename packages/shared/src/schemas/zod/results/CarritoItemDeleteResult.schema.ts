import * as z from 'zod';
export const CarritoItemDeleteResultSchema = z.nullable(z.object({
  id: z.bigint(),
  cantidadCI: z.number().int(),
  carritoId: z.bigint(),
  carrito: z.unknown(),
  publicacionId: z.bigint(),
  publicacion: z.unknown()
}));