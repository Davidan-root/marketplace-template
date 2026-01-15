import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const PagoWhereUniqueInputObjectSchema: z.ZodType<Prisma.PagoWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoWhereUniqueInput>;
export const PagoWhereUniqueInputObjectZodSchema = makeSchema();
