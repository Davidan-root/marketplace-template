import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorScalarWhereInputObjectSchema as VendedorScalarWhereInputObjectSchema } from './VendedorScalarWhereInput.schema';
import { VendedorUpdateManyMutationInputObjectSchema as VendedorUpdateManyMutationInputObjectSchema } from './VendedorUpdateManyMutationInput.schema';
import { VendedorUncheckedUpdateManyWithoutEstadoVendedorInputObjectSchema as VendedorUncheckedUpdateManyWithoutEstadoVendedorInputObjectSchema } from './VendedorUncheckedUpdateManyWithoutEstadoVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VendedorUpdateManyMutationInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateManyWithoutEstadoVendedorInputObjectSchema)])
}).strict();
export const VendedorUpdateManyWithWhereWithoutEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorUpdateManyWithWhereWithoutEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpdateManyWithWhereWithoutEstadoVendedorInput>;
export const VendedorUpdateManyWithWhereWithoutEstadoVendedorInputObjectZodSchema = makeSchema();
