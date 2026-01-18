import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  usuarioId: z.bigint().optional()
}).strict();
export const VendedorWhereUniqueInputObjectSchema: z.ZodType<Prisma.VendedorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorWhereUniqueInput>;
export const VendedorWhereUniqueInputObjectZodSchema = makeSchema();
