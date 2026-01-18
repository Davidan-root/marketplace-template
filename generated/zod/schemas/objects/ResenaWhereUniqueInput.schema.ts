import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const ResenaWhereUniqueInputObjectSchema: z.ZodType<Prisma.ResenaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaWhereUniqueInput>;
export const ResenaWhereUniqueInputObjectZodSchema = makeSchema();
