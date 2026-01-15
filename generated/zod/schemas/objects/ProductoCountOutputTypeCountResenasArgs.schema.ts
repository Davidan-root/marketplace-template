import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './ResenaWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResenaWhereInputObjectSchema).optional()
}).strict();
export const ProductoCountOutputTypeCountResenasArgsObjectSchema = makeSchema();
export const ProductoCountOutputTypeCountResenasArgsObjectZodSchema = makeSchema();
