import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './CategoriaWhereUniqueInput.schema';
import { CategoriaCreateWithoutProductosInputObjectSchema as CategoriaCreateWithoutProductosInputObjectSchema } from './CategoriaCreateWithoutProductosInput.schema';
import { CategoriaUncheckedCreateWithoutProductosInputObjectSchema as CategoriaUncheckedCreateWithoutProductosInputObjectSchema } from './CategoriaUncheckedCreateWithoutProductosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoriaCreateWithoutProductosInputObjectSchema), z.lazy(() => CategoriaUncheckedCreateWithoutProductosInputObjectSchema)])
}).strict();
export const CategoriaCreateOrConnectWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriaCreateOrConnectWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateOrConnectWithoutProductosInput>;
export const CategoriaCreateOrConnectWithoutProductosInputObjectZodSchema = makeSchema();
