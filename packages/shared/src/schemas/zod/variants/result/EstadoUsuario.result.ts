import * as z from 'zod';
// prettier-ignore
export const EstadoUsuarioResultSchema = z.object({
    id: z.bigint(),
    descripcionEU: z.string(),
    nombreEU: z.string(),
    usuarios: z.array(z.unknown())
}).strict();

export type EstadoUsuarioResultType = z.infer<typeof EstadoUsuarioResultSchema>;
