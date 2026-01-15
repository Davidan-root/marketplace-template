import * as z from 'zod';

export const PedidoItemScalarFieldEnumSchema = z.enum(['id', 'cantidadPI', 'precioUnitario', 'subtotalPI', 'pedidoId', 'publicacionId'])

export type PedidoItemScalarFieldEnum = z.infer<typeof PedidoItemScalarFieldEnumSchema>;