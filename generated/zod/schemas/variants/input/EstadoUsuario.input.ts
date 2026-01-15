import * as z from 'zod';
// prettier-ignore
export const EstadoUsuarioInputSchema = z.object({
    id: z.bigint(),
    descripcionEU: z.string(),
    nombreEU: z.string(),
    usuarios: z.array(z.unknown())
}).strict();

export type EstadoUsuarioInputType = z.infer<typeof EstadoUsuarioInputSchema>;
