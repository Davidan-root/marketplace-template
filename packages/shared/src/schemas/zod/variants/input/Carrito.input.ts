import * as z from 'zod';
// prettier-ignore
export const CarritoInputSchema = z.object({
    id: z.bigint(),
    fechaHoraAlta: z.date(),
    fechaHoraBaja: z.date().optional().nullable(),
    fechaHoraModificacion: z.date().optional().nullable(),
    usuarioId: z.bigint(),
    usuario: z.unknown(),
    carritoItems: z.array(z.unknown())
}).strict();

export type CarritoInputType = z.infer<typeof CarritoInputSchema>;
