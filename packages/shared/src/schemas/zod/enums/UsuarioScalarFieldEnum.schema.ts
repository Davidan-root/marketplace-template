import * as z from 'zod';

export const UsuarioScalarFieldEnumSchema = z.enum(['id', 'direccionUsuario', 'email', 'nombreUsuario', 'numeroContacto', 'passwordHash', 'estadoUsuarioId'])

export type UsuarioScalarFieldEnum = z.infer<typeof UsuarioScalarFieldEnumSchema>;