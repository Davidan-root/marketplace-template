import * as z from 'zod';

export const CarritoScalarFieldEnumSchema = z.enum(['id', 'fechaHoraAlta', 'fechaHoraBaja', 'fechaHoraModificacion', 'usuarioId'])

export type CarritoScalarFieldEnum = z.infer<typeof CarritoScalarFieldEnumSchema>;