import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './ResenaWhereUniqueInput.schema';
import { ResenaCreateWithoutProductoInputObjectSchema as ResenaCreateWithoutProductoInputObjectSchema } from './ResenaCreateWithoutProductoInput.schema';
import { ResenaUncheckedCreateWithoutProductoInputObjectSchema as ResenaUncheckedCreateWithoutProductoInputObjectSchema } from './ResenaUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResenaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResenaCreateWithoutProductoInputObjectSchema), z.lazy(() => ResenaUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const ResenaCreateOrConnectWithoutProductoInputObjectSchema: z.ZodType<Prisma.ResenaCreateOrConnectWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaCreateOrConnectWithoutProductoInput>;
export const ResenaCreateOrConnectWithoutProductoInputObjectZodSchema = makeSchema();
