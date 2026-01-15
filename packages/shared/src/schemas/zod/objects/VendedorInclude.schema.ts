import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './UsuarioArgs.schema';
import { EstadoVendedorArgsObjectSchema as EstadoVendedorArgsObjectSchema } from './EstadoVendedorArgs.schema';
import { PublicacionFindManySchema as PublicacionFindManySchema } from '../findManyPublicacion.schema';
import { VendedorCountOutputTypeArgsObjectSchema as VendedorCountOutputTypeArgsObjectSchema } from './VendedorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
  estadoVendedor: z.union([z.boolean(), z.lazy(() => EstadoVendedorArgsObjectSchema)]).optional(),
  publicaciones: z.union([z.boolean(), z.lazy(() => PublicacionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VendedorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VendedorIncludeObjectSchema: z.ZodType<Prisma.VendedorInclude> = makeSchema() as unknown as z.ZodType<Prisma.VendedorInclude>;
export const VendedorIncludeObjectZodSchema = makeSchema();
