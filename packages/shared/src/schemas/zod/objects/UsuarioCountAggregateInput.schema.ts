import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  direccionUsuario: z.literal(true).optional(),
  email: z.literal(true).optional(),
  nombreUsuario: z.literal(true).optional(),
  numeroContacto: z.literal(true).optional(),
  passwordHash: z.literal(true).optional(),
  estadoUsuarioId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UsuarioCountAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCountAggregateInputType>;
export const UsuarioCountAggregateInputObjectZodSchema = makeSchema();
