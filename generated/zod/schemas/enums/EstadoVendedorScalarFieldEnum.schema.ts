import * as z from 'zod';

export const EstadoVendedorScalarFieldEnumSchema = z.enum(['id', 'descripcionEV', 'nombreEV'])

export type EstadoVendedorScalarFieldEnum = z.infer<typeof EstadoVendedorScalarFieldEnumSchema>;