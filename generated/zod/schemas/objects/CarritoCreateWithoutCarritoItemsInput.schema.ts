import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateNestedOneWithoutCarritosInputObjectSchema as UsuarioCreateNestedOneWithoutCarritosInputObjectSchema } from './UsuarioCreateNestedOneWithoutCarritosInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  fechaHoraBaja: z.coerce.date().optional().nullable(),
  fechaHoraModificacion: z.coerce.date().optional().nullable(),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutCarritosInputObjectSchema)
}).strict();
export const CarritoCreateWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.CarritoCreateWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateWithoutCarritoItemsInput>;
export const CarritoCreateWithoutCarritoItemsInputObjectZodSchema = makeSchema();
