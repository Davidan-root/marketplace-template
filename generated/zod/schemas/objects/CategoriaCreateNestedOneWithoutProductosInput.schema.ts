import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CategoriaCreateWithoutProductosInputObjectSchema as CategoriaCreateWithoutProductosInputObjectSchema } from './CategoriaCreateWithoutProductosInput.schema';
import { CategoriaUncheckedCreateWithoutProductosInputObjectSchema as CategoriaUncheckedCreateWithoutProductosInputObjectSchema } from './CategoriaUncheckedCreateWithoutProductosInput.schema';
import { CategoriaCreateOrConnectWithoutProductosInputObjectSchema as CategoriaCreateOrConnectWithoutProductosInputObjectSchema } from './CategoriaCreateOrConnectWithoutProductosInput.schema';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './CategoriaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoriaCreateWithoutProductosInputObjectSchema), z.lazy(() => CategoriaUncheckedCreateWithoutProductosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoriaCreateOrConnectWithoutProductosInputObjectSchema).optional(),
  connect: z.lazy(() => CategoriaWhereUniqueInputObjectSchema).optional()
}).strict();
export const CategoriaCreateNestedOneWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriaCreateNestedOneWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateNestedOneWithoutProductosInput>;
export const CategoriaCreateNestedOneWithoutProductosInputObjectZodSchema = makeSchema();
