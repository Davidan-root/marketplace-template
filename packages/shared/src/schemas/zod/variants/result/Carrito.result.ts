import * as z from 'zod';
// prettier-ignore
export const CarritoResultSchema = z.object({
    id: z.bigint(),
    fechaHoraAlta: z.date(),
    fechaHoraBaja: z.date().nullable(),
    fechaHoraModificacion: z.date().nullable(),
    usuarioId: z.bigint(),
    usuario: z.unknown(),
    carritoItems: z.array(z.unknown())
}).strict();

export type CarritoResultType = z.infer<typeof CarritoResultSchema>;
