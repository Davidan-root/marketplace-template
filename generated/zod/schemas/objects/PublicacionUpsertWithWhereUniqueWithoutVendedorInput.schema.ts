import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionUpdateWithoutVendedorInputObjectSchema as PublicacionUpdateWithoutVendedorInputObjectSchema } from './PublicacionUpdateWithoutVendedorInput.schema';
import { PublicacionUncheckedUpdateWithoutVendedorInputObjectSchema as PublicacionUncheckedUpdateWithoutVendedorInputObjectSchema } from './PublicacionUncheckedUpdateWithoutVendedorInput.schema';
import { PublicacionCreateWithoutVendedorInputObjectSchema as PublicacionCreateWithoutVendedorInputObjectSchema } from './PublicacionCreateWithoutVendedorInput.schema';
import { PublicacionUncheckedCreateWithoutVendedorInputObjectSchema as PublicacionUncheckedCreateWithoutVendedorInputObjectSchema } from './PublicacionUncheckedCreateWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PublicacionUpdateWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutVendedorInputObjectSchema)]),
  create: z.union([z.lazy(() => PublicacionCreateWithoutVendedorInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutVendedorInputObjectSchema)])
}).strict();
export const PublicacionUpsertWithWhereUniqueWithoutVendedorInputObjectSchema: z.ZodType<Prisma.PublicacionUpsertWithWhereUniqueWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpsertWithWhereUniqueWithoutVendedorInput>;
export const PublicacionUpsertWithWhereUniqueWithoutVendedorInputObjectZodSchema = makeSchema();
