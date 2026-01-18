import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './UsuarioArgs.schema';
import { CarritoItemFindManySchema as CarritoItemFindManySchema } from '../findManyCarritoItem.schema';
import { CarritoCountOutputTypeArgsObjectSchema as CarritoCountOutputTypeArgsObjectSchema } from './CarritoCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
  carritoItems: z.union([z.boolean(), z.lazy(() => CarritoItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CarritoCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CarritoIncludeObjectSchema: z.ZodType<Prisma.CarritoInclude> = makeSchema() as unknown as z.ZodType<Prisma.CarritoInclude>;
export const CarritoIncludeObjectZodSchema = makeSchema();
