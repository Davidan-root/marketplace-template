import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './EnvioWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EnvioWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => EnvioWhereInputObjectSchema).optional().nullable()
}).strict();
export const EnvioNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.EnvioNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnvioNullableScalarRelationFilter>;
export const EnvioNullableScalarRelationFilterObjectZodSchema = makeSchema();
