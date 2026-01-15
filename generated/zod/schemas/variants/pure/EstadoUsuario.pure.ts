import * as z from 'zod';
// prettier-ignore
export const EstadoUsuarioModelSchema = z.object({
    id: z.bigint(),
    descripcionEU: z.string(),
    nombreEU: z.string(),
    usuarios: z.array(z.unknown())
}).strict();

export type EstadoUsuarioPureType = z.infer<typeof EstadoUsuarioModelSchema>;
