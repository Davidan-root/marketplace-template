import * as z from 'zod';

export const VendedorScalarFieldEnumSchema = z.enum(['id', 'nombreTienda', 'reputacion', 'usuarioId', 'estadoVendedorId'])

export type VendedorScalarFieldEnum = z.infer<typeof VendedorScalarFieldEnumSchema>;