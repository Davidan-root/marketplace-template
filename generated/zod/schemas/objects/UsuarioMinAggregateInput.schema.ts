import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  direccionUsuario: z.literal(true).optional(),
  email: z.literal(true).optional(),
  nombreUsuario: z.literal(true).optional(),
  numeroContacto: z.literal(true).optional(),
  passwordHash: z.literal(true).optional(),
  estadoUsuarioId: z.literal(true).optional()
}).strict();
export const UsuarioMinAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioMinAggregateInputType>;
export const UsuarioMinAggregateInputObjectZodSchema = makeSchema();
