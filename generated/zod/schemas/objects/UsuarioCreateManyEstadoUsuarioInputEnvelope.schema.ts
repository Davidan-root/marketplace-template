import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateManyEstadoUsuarioInputObjectSchema as UsuarioCreateManyEstadoUsuarioInputObjectSchema } from './UsuarioCreateManyEstadoUsuarioInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UsuarioCreateManyEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioCreateManyEstadoUsuarioInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UsuarioCreateManyEstadoUsuarioInputEnvelopeObjectSchema: z.ZodType<Prisma.UsuarioCreateManyEstadoUsuarioInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateManyEstadoUsuarioInputEnvelope>;
export const UsuarioCreateManyEstadoUsuarioInputEnvelopeObjectZodSchema = makeSchema();
