import * as z from 'zod';

export const ProductoScalarFieldEnumSchema = z.enum(['id', 'descripcionProducto', 'nombreProducto', 'categoriaId'])

export type ProductoScalarFieldEnum = z.infer<typeof ProductoScalarFieldEnumSchema>;