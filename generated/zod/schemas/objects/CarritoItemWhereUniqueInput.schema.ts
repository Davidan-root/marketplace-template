import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const CarritoItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.CarritoItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemWhereUniqueInput>;
export const CarritoItemWhereUniqueInputObjectZodSchema = makeSchema();
