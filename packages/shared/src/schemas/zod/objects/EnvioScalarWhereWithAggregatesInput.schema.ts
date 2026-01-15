import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const envioscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EnvioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EnvioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EnvioScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EnvioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EnvioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  estadoEnvio: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  numeroEnvio: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  pedidoId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const EnvioScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EnvioScalarWhereWithAggregatesInput> = envioscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EnvioScalarWhereWithAggregatesInput>;
export const EnvioScalarWhereWithAggregatesInputObjectZodSchema = envioscalarwherewithaggregatesinputSchema;
