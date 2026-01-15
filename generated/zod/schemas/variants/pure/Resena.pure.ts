import * as z from 'zod';
// prettier-ignore
export const ResenaModelSchema = z.object({
    id: z.bigint(),
    comentario: z.string(),
    fechaHoraAlta: z.date(),
    puntaje: z.number().int(),
    productoId: z.bigint(),
    producto: z.unknown()
}).strict();

export type ResenaPureType = z.infer<typeof ResenaModelSchema>;
