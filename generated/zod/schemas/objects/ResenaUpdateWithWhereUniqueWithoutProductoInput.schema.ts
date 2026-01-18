import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './ResenaWhereUniqueInput.schema';
import { ResenaUpdateWithoutProductoInputObjectSchema as ResenaUpdateWithoutProductoInputObjectSchema } from './ResenaUpdateWithoutProductoInput.schema';
import { ResenaUncheckedUpdateWithoutProductoInputObjectSchema as ResenaUncheckedUpdateWithoutProductoInputObjectSchema } from './ResenaUncheckedUpdateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResenaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResenaUpdateWithoutProductoInputObjectSchema), z.lazy(() => ResenaUncheckedUpdateWithoutProductoInputObjectSchema)])
}).strict();
export const ResenaUpdateWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.ResenaUpdateWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaUpdateWithWhereUniqueWithoutProductoInput>;
export const ResenaUpdateWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
