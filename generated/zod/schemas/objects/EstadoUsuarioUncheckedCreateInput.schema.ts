import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioUncheckedCreateNestedManyWithoutEstadoUsuarioInputObjectSchema as UsuarioUncheckedCreateNestedManyWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUncheckedCreateNestedManyWithoutEstadoUsuarioInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEU: z.string(),
  nombreEU: z.string(),
  usuarios: z.lazy(() => UsuarioUncheckedCreateNestedManyWithoutEstadoUsuarioInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioUncheckedCreateInput>;
export const EstadoUsuarioUncheckedCreateInputObjectZodSchema = makeSchema();
