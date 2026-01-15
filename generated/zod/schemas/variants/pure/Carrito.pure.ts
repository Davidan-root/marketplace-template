import * as z from 'zod';
// prettier-ignore
export const CarritoModelSchema = z.object({
    id: z.bigint(),
    fechaHoraAlta: z.date(),
    fechaHoraBaja: z.date().nullable(),
    fechaHoraModificacion: z.date().nullable(),
    usuarioId: z.bigint(),
    usuario: z.unknown(),
    carritoItems: z.array(z.unknown())
}).strict();

export type CarritoPureType = z.infer<typeof CarritoModelSchema>;
