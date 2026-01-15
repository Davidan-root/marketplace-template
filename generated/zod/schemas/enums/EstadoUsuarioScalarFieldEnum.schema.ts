import * as z from 'zod';

export const EstadoUsuarioScalarFieldEnumSchema = z.enum(['id', 'descripcionEU', 'nombreEU'])

export type EstadoUsuarioScalarFieldEnum = z.infer<typeof EstadoUsuarioScalarFieldEnumSchema>;