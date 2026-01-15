import * as z from 'zod';
export const CarritoItemGroupByResultSchema = z.array(z.object({
  id: z.bigint(),
  cantidadCI: z.number().int(),
  carritoId: z.bigint(),
  publicacionId: z.bigint(),
  _count: z.object({
    id: z.number(),
    cantidadCI: z.number(),
    carritoId: z.number(),
    carrito: z.number(),
    publicacionId: z.number(),
    publicacion: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    cantidadCI: z.number().nullable(),
    carritoId: z.bigint().nullable(),
    publicacionId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    cantidadCI: z.number().nullable(),
    carritoId: z.number().nullable(),
    publicacionId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    cantidadCI: z.number().int().nullable(),
    carritoId: z.bigint().nullable(),
    publicacionId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    cantidadCI: z.number().int().nullable(),
    carritoId: z.bigint().nullable(),
    publicacionId: z.bigint().nullable()
  }).nullable().optional()
}));