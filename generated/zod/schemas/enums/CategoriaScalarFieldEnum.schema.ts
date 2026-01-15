import * as z from 'zod';

export const CategoriaScalarFieldEnumSchema = z.enum(['id', 'descripcionCategoria', 'nombreCategoria'])

export type CategoriaScalarFieldEnum = z.infer<typeof CategoriaScalarFieldEnumSchema>;