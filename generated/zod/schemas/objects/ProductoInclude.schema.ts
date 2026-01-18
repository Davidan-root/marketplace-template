import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CategoriaArgsObjectSchema as CategoriaArgsObjectSchema } from './CategoriaArgs.schema';
import { PublicacionFindManySchema as PublicacionFindManySchema } from '../findManyPublicacion.schema';
import { ResenaFindManySchema as ResenaFindManySchema } from '../findManyResena.schema';
import { ProductoCountOutputTypeArgsObjectSchema as ProductoCountOutputTypeArgsObjectSchema } from './ProductoCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  categoria: z.union([z.boolean(), z.lazy(() => CategoriaArgsObjectSchema)]).optional(),
  publicaciones: z.union([z.boolean(), z.lazy(() => PublicacionFindManySchema)]).optional(),
  resenas: z.union([z.boolean(), z.lazy(() => ResenaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductoCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductoIncludeObjectSchema: z.ZodType<Prisma.ProductoInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductoInclude>;
export const ProductoIncludeObjectZodSchema = makeSchema();
