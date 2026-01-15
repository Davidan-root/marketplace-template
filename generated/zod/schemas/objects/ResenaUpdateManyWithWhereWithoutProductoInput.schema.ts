import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResenaScalarWhereInputObjectSchema as ResenaScalarWhereInputObjectSchema } from './ResenaScalarWhereInput.schema';
import { ResenaUpdateManyMutationInputObjectSchema as ResenaUpdateManyMutationInputObjectSchema } from './ResenaUpdateManyMutationInput.schema';
import { ResenaUncheckedUpdateManyWithoutProductoInputObjectSchema as ResenaUncheckedUpdateManyWithoutProductoInputObjectSchema } from './ResenaUncheckedUpdateManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResenaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResenaUpdateManyMutationInputObjectSchema), z.lazy(() => ResenaUncheckedUpdateManyWithoutProductoInputObjectSchema)])
}).strict();
export const ResenaUpdateManyWithWhereWithoutProductoInputObjectSchema: z.ZodType<Prisma.ResenaUpdateManyWithWhereWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaUpdateManyWithWhereWithoutProductoInput>;
export const ResenaUpdateManyWithWhereWithoutProductoInputObjectZodSchema = makeSchema();
