import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateNestedManyWithoutEstadoUsuarioInputObjectSchema as UsuarioCreateNestedManyWithoutEstadoUsuarioInputObjectSchema } from './UsuarioCreateNestedManyWithoutEstadoUsuarioInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEU: z.string(),
  nombreEU: z.string(),
  usuarios: z.lazy(() => UsuarioCreateNestedManyWithoutEstadoUsuarioInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioCreateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioCreateInput>;
export const EstadoUsuarioCreateInputObjectZodSchema = makeSchema();
