import * as z from 'zod';

export const CarritoItemScalarFieldEnumSchema = z.enum(['id', 'cantidadCI', 'carritoId', 'publicacionId'])

export type CarritoItemScalarFieldEnum = z.infer<typeof CarritoItemScalarFieldEnumSchema>;