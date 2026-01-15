import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from './CategoriaWhereInput.schema';
import { CategoriaUpdateWithoutProductosInputObjectSchema as CategoriaUpdateWithoutProductosInputObjectSchema } from './CategoriaUpdateWithoutProductosInput.schema';
import { CategoriaUncheckedUpdateWithoutProductosInputObjectSchema as CategoriaUncheckedUpdateWithoutProductosInputObjectSchema } from './CategoriaUncheckedUpdateWithoutProductosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CategoriaUpdateWithoutProductosInputObjectSchema), z.lazy(() => CategoriaUncheckedUpdateWithoutProductosInputObjectSchema)])
}).strict();
export const CategoriaUpdateToOneWithWhereWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateToOneWithWhereWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateToOneWithWhereWithoutProductosInput>;
export const CategoriaUpdateToOneWithWhereWithoutProductosInputObjectZodSchema = makeSchema();
