import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EnvioCreateManyInputObjectSchema as EnvioCreateManyInputObjectSchema } from './objects/EnvioCreateManyInput.schema';

export const EnvioCreateManySchema: z.ZodType<Prisma.EnvioCreateManyArgs> = z.object({ data: z.union([ EnvioCreateManyInputObjectSchema, z.array(EnvioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EnvioCreateManyArgs>;

export const EnvioCreateManyZodSchema = z.object({ data: z.union([ EnvioCreateManyInputObjectSchema, z.array(EnvioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();