import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const PublicacionWhereUniqueInputObjectSchema: z.ZodType<Prisma.PublicacionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionWhereUniqueInput>;
export const PublicacionWhereUniqueInputObjectZodSchema = makeSchema();
