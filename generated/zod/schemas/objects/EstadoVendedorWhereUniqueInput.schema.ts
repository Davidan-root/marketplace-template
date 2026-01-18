import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional()
}).strict();
export const EstadoVendedorWhereUniqueInputObjectSchema: z.ZodType<Prisma.EstadoVendedorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorWhereUniqueInput>;
export const EstadoVendedorWhereUniqueInputObjectZodSchema = makeSchema();
