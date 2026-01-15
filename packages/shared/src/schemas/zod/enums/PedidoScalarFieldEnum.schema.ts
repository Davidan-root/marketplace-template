import * as z from 'zod';

export const PedidoScalarFieldEnumSchema = z.enum(['id', 'fechaHoraAlta', 'numeroPedido', 'totalPrecio', 'usuarioId'])

export type PedidoScalarFieldEnum = z.infer<typeof PedidoScalarFieldEnumSchema>;