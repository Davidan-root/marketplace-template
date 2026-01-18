import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CategoriaUpdateWithoutProductosInputObjectSchema as CategoriaUpdateWithoutProductosInputObjectSchema } from './CategoriaUpdateWithoutProductosInput.schema';
import { CategoriaUncheckedUpdateWithoutProductosInputObjectSchema as CategoriaUncheckedUpdateWithoutProductosInputObjectSchema } from './CategoriaUncheckedUpdateWithoutProductosInput.schema';
import { CategoriaCreateWithoutProductosInputObjectSchema as CategoriaCreateWithoutProductosInputObjectSchema } from './CategoriaCreateWithoutProductosInput.schema';
import { CategoriaUncheckedCreateWithoutProductosInputObjectSchema as CategoriaUncheckedCreateWithoutProductosInputObjectSchema } from './CategoriaUncheckedCreateWithoutProductosInput.schema';
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from './CategoriaWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoriaUpdateWithoutProductosInputObjectSchema), z.lazy(() => CategoriaUncheckedUpdateWithoutProductosInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoriaCreateWithoutProductosInputObjectSchema), z.lazy(() => CategoriaUncheckedCreateWithoutProductosInputObjectSchema)]),
  where: z.lazy(() => CategoriaWhereInputObjectSchema).optional()
}).strict();
export const CategoriaUpsertWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriaUpsertWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpsertWithoutProductosInput>;
export const CategoriaUpsertWithoutProductosInputObjectZodSchema = makeSchema();
