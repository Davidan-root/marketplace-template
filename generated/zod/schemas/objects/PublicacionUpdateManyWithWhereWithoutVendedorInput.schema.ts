import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionScalarWhereInputObjectSchema as PublicacionScalarWhereInputObjectSchema } from './PublicacionScalarWhereInput.schema';
import { PublicacionUpdateManyMutationInputObjectSchema as PublicacionUpdateManyMutationInputObjectSchema } from './PublicacionUpdateManyMutationInput.schema';
import { PublicacionUncheckedUpdateManyWithoutVendedorInputObjectSchema as PublicacionUncheckedUpdateManyWithoutVendedorInputObjectSchema } from './PublicacionUncheckedUpdateManyWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PublicacionUpdateManyMutationInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateManyWithoutVendedorInputObjectSchema)])
}).strict();
export const PublicacionUpdateManyWithWhereWithoutVendedorInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateManyWithWhereWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateManyWithWhereWithoutVendedorInput>;
export const PublicacionUpdateManyWithWhereWithoutVendedorInputObjectZodSchema = makeSchema();
