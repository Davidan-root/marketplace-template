import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './ResenaWhereUniqueInput.schema';
import { ResenaUpdateWithoutProductoInputObjectSchema as ResenaUpdateWithoutProductoInputObjectSchema } from './ResenaUpdateWithoutProductoInput.schema';
import { ResenaUncheckedUpdateWithoutProductoInputObjectSchema as ResenaUncheckedUpdateWithoutProductoInputObjectSchema } from './ResenaUncheckedUpdateWithoutProductoInput.schema';
import { ResenaCreateWithoutProductoInputObjectSchema as ResenaCreateWithoutProductoInputObjectSchema } from './ResenaCreateWithoutProductoInput.schema';
import { ResenaUncheckedCreateWithoutProductoInputObjectSchema as ResenaUncheckedCreateWithoutProductoInputObjectSchema } from './ResenaUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResenaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResenaUpdateWithoutProductoInputObjectSchema), z.lazy(() => ResenaUncheckedUpdateWithoutProductoInputObjectSchema)]),
  create: z.union([z.lazy(() => ResenaCreateWithoutProductoInputObjectSchema), z.lazy(() => ResenaUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const ResenaUpsertWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.ResenaUpsertWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaUpsertWithWhereUniqueWithoutProductoInput>;
export const ResenaUpsertWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
