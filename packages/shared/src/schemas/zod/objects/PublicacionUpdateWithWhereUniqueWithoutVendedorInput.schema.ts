import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionUpdateWithoutVendedorInputObjectSchema as PublicacionUpdateWithoutVendedorInputObjectSchema } from './PublicacionUpdateWithoutVendedorInput.schema';
import { PublicacionUncheckedUpdateWithoutVendedorInputObjectSchema as PublicacionUncheckedUpdateWithoutVendedorInputObjectSchema } from './PublicacionUncheckedUpdateWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PublicacionUpdateWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutVendedorInputObjectSchema)])
}).strict();
export const PublicacionUpdateWithWhereUniqueWithoutVendedorInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateWithWhereUniqueWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateWithWhereUniqueWithoutVendedorInput>;
export const PublicacionUpdateWithWhereUniqueWithoutVendedorInputObjectZodSchema = makeSchema();
