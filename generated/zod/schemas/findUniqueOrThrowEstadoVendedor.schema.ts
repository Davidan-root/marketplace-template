import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorSelectObjectSchema as EstadoVendedorSelectObjectSchema } from './objects/EstadoVendedorSelect.schema';
import { EstadoVendedorIncludeObjectSchema as EstadoVendedorIncludeObjectSchema } from './objects/EstadoVendedorInclude.schema';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './objects/EstadoVendedorWhereUniqueInput.schema';

export const EstadoVendedorFindUniqueOrThrowSchema: z.ZodType<Prisma.EstadoVendedorFindUniqueOrThrowArgs> = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), where: EstadoVendedorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorFindUniqueOrThrowArgs>;

export const EstadoVendedorFindUniqueOrThrowZodSchema = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), where: EstadoVendedorWhereUniqueInputObjectSchema }).strict();