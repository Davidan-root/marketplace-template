import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './UsuarioArgs.schema';
import { EstadoVendedorArgsObjectSchema as EstadoVendedorArgsObjectSchema } from './EstadoVendedorArgs.schema';
import { PublicacionFindManySchema as PublicacionFindManySchema } from '../findManyPublicacion.schema';
import { VendedorCountOutputTypeArgsObjectSchema as VendedorCountOutputTypeArgsObjectSchema } from './VendedorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  nombreTienda: z.boolean().optional(),
  reputacion: z.boolean().optional(),
  usuarioId: z.boolean().optional(),
  usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
  estadoVendedorId: z.boolean().optional(),
  estadoVendedor: z.union([z.boolean(), z.lazy(() => EstadoVendedorArgsObjectSchema)]).optional(),
  publicaciones: z.union([z.boolean(), z.lazy(() => PublicacionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VendedorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VendedorSelectObjectSchema: z.ZodType<Prisma.VendedorSelect> = makeSchema() as unknown as z.ZodType<Prisma.VendedorSelect>;
export const VendedorSelectObjectZodSchema = makeSchema();
