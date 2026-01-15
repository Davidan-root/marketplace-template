import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioCreateNestedOneWithoutCarritosInputObjectSchema as UsuarioCreateNestedOneWithoutCarritosInputObjectSchema } from './UsuarioCreateNestedOneWithoutCarritosInput.schema';
import { CarritoItemCreateNestedManyWithoutCarritoInputObjectSchema as CarritoItemCreateNestedManyWithoutCarritoInputObjectSchema } from './CarritoItemCreateNestedManyWithoutCarritoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  fechaHoraBaja: z.coerce.date().optional().nullable(),
  fechaHoraModificacion: z.coerce.date().optional().nullable(),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutCarritosInputObjectSchema),
  carritoItems: z.lazy(() => CarritoItemCreateNestedManyWithoutCarritoInputObjectSchema).optional()
}).strict();
export const CarritoCreateInputObjectSchema: z.ZodType<Prisma.CarritoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateInput>;
export const CarritoCreateInputObjectZodSchema = makeSchema();
