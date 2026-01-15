import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriaCreateWithoutProductosInputObjectSchema as CategoriaCreateWithoutProductosInputObjectSchema } from './CategoriaCreateWithoutProductosInput.schema';
import { CategoriaUncheckedCreateWithoutProductosInputObjectSchema as CategoriaUncheckedCreateWithoutProductosInputObjectSchema } from './CategoriaUncheckedCreateWithoutProductosInput.schema';
import { CategoriaCreateOrConnectWithoutProductosInputObjectSchema as CategoriaCreateOrConnectWithoutProductosInputObjectSchema } from './CategoriaCreateOrConnectWithoutProductosInput.schema';
import { CategoriaUpsertWithoutProductosInputObjectSchema as CategoriaUpsertWithoutProductosInputObjectSchema } from './CategoriaUpsertWithoutProductosInput.schema';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './CategoriaWhereUniqueInput.schema';
import { CategoriaUpdateToOneWithWhereWithoutProductosInputObjectSchema as CategoriaUpdateToOneWithWhereWithoutProductosInputObjectSchema } from './CategoriaUpdateToOneWithWhereWithoutProductosInput.schema';
import { CategoriaUpdateWithoutProductosInputObjectSchema as CategoriaUpdateWithoutProductosInputObjectSchema } from './CategoriaUpdateWithoutProductosInput.schema';
import { CategoriaUncheckedUpdateWithoutProductosInputObjectSchema as CategoriaUncheckedUpdateWithoutProductosInputObjectSchema } from './CategoriaUncheckedUpdateWithoutProductosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoriaCreateWithoutProductosInputObjectSchema), z.lazy(() => CategoriaUncheckedCreateWithoutProductosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoriaCreateOrConnectWithoutProductosInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoriaUpsertWithoutProductosInputObjectSchema).optional(),
  connect: z.lazy(() => CategoriaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoriaUpdateToOneWithWhereWithoutProductosInputObjectSchema), z.lazy(() => CategoriaUpdateWithoutProductosInputObjectSchema), z.lazy(() => CategoriaUncheckedUpdateWithoutProductosInputObjectSchema)]).optional()
}).strict();
export const CategoriaUpdateOneRequiredWithoutProductosNestedInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateOneRequiredWithoutProductosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateOneRequiredWithoutProductosNestedInput>;
export const CategoriaUpdateOneRequiredWithoutProductosNestedInputObjectZodSchema = makeSchema();
