import * as z from 'zod';

export const PagoScalarFieldEnumSchema = z.enum(['id', 'metodoPago', 'monto', 'pedidoId'])

export type PagoScalarFieldEnum = z.infer<typeof PagoScalarFieldEnumSchema>;