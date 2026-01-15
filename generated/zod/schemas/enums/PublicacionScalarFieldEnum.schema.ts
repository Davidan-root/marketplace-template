import * as z from 'zod';

export const PublicacionScalarFieldEnumSchema = z.enum(['id', 'condicionesVenta', 'enviosVenta', 'precioVenta', 'stockVenta', 'vendedorId', 'productoId'])

export type PublicacionScalarFieldEnum = z.infer<typeof PublicacionScalarFieldEnumSchema>;