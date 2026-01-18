import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './CarritoWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CarritoWhereInputObjectSchema).optional()
}).strict();
export const UsuarioCountOutputTypeCountCarritosArgsObjectSchema = makeSchema();
export const UsuarioCountOutputTypeCountCarritosArgsObjectZodSchema = makeSchema();
