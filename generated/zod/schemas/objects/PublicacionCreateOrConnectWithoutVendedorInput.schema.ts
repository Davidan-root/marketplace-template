import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionCreateWithoutVendedorInputObjectSchema as PublicacionCreateWithoutVendedorInputObjectSchema } from './PublicacionCreateWithoutVendedorInput.schema';
import { PublicacionUncheckedCreateWithoutVendedorInputObjectSchema as PublicacionUncheckedCreateWithoutVendedorInputObjectSchema } from './PublicacionUncheckedCreateWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublicacionCreateWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutVendedorInputObjectSchema)])
}).strict();
export const PublicacionCreateOrConnectWithoutVendedorInputObjectSchema: z.ZodType<Prisma.PublicacionCreateOrConnectWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateOrConnectWithoutVendedorInput>;
export const PublicacionCreateOrConnectWithoutVendedorInputObjectZodSchema = makeSchema();
