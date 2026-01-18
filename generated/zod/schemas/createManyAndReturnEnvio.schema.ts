import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EnvioSelectObjectSchema as EnvioSelectObjectSchema } from './objects/EnvioSelect.schema';
import { EnvioCreateManyInputObjectSchema as EnvioCreateManyInputObjectSchema } from './objects/EnvioCreateManyInput.schema';

export const EnvioCreateManyAndReturnSchema: z.ZodType<Prisma.EnvioCreateManyAndReturnArgs> = z.object({ select: EnvioSelectObjectSchema.optional(), data: z.union([ EnvioCreateManyInputObjectSchema, z.array(EnvioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EnvioCreateManyAndReturnArgs>;

export const EnvioCreateManyAndReturnZodSchema = z.object({ select: EnvioSelectObjectSchema.optional(), data: z.union([ EnvioCreateManyInputObjectSchema, z.array(EnvioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();