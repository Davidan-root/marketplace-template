import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoCreateWithoutResenasInputObjectSchema as ProductoCreateWithoutResenasInputObjectSchema } from './ProductoCreateWithoutResenasInput.schema';
import { ProductoUncheckedCreateWithoutResenasInputObjectSchema as ProductoUncheckedCreateWithoutResenasInputObjectSchema } from './ProductoUncheckedCreateWithoutResenasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductoCreateWithoutResenasInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutResenasInputObjectSchema)])
}).strict();
export const ProductoCreateOrConnectWithoutResenasInputObjectSchema: z.ZodType<Prisma.ProductoCreateOrConnectWithoutResenasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateOrConnectWithoutResenasInput>;
export const ProductoCreateOrConnectWithoutResenasInputObjectZodSchema = makeSchema();
