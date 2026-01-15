import * as z from 'zod';

export const ResenaScalarFieldEnumSchema = z.enum(['id', 'comentario', 'fechaHoraAlta', 'puntaje', 'productoId'])

export type ResenaScalarFieldEnum = z.infer<typeof ResenaScalarFieldEnumSchema>;