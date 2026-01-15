import * as z from 'zod';
// prettier-ignore
export const ResenaInputSchema = z.object({
    id: z.bigint(),
    comentario: z.string(),
    fechaHoraAlta: z.date(),
    puntaje: z.number().int(),
    productoId: z.bigint(),
    producto: z.unknown()
}).strict();

export type ResenaInputType = z.infer<typeof ResenaInputSchema>;
