import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoVendedorCreateWithoutVendedoresInputObjectSchema as EstadoVendedorCreateWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateWithoutVendedoresInput.schema';
import { EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema as EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUncheckedCreateWithoutVendedoresInput.schema';
import { EstadoVendedorCreateOrConnectWithoutVendedoresInputObjectSchema as EstadoVendedorCreateOrConnectWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateOrConnectWithoutVendedoresInput.schema';
import { EstadoVendedorUpsertWithoutVendedoresInputObjectSchema as EstadoVendedorUpsertWithoutVendedoresInputObjectSchema } from './EstadoVendedorUpsertWithoutVendedoresInput.schema';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './EstadoVendedorWhereUniqueInput.schema';
import { EstadoVendedorUpdateToOneWithWhereWithoutVendedoresInputObjectSchema as EstadoVendedorUpdateToOneWithWhereWithoutVendedoresInputObjectSchema } from './EstadoVendedorUpdateToOneWithWhereWithoutVendedoresInput.schema';
import { EstadoVendedorUpdateWithoutVendedoresInputObjectSchema as EstadoVendedorUpdateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUpdateWithoutVendedoresInput.schema';
import { EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema as EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUncheckedUpdateWithoutVendedoresInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EstadoVendedorCreateWithoutVendedoresInputObjectSchema), z.lazy(() => EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EstadoVendedorCreateOrConnectWithoutVendedoresInputObjectSchema).optional(),
  upsert: z.lazy(() => EstadoVendedorUpsertWithoutVendedoresInputObjectSchema).optional(),
  connect: z.lazy(() => EstadoVendedorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EstadoVendedorUpdateToOneWithWhereWithoutVendedoresInputObjectSchema), z.lazy(() => EstadoVendedorUpdateWithoutVendedoresInputObjectSchema), z.lazy(() => EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema)]).optional()
}).strict();
export const EstadoVendedorUpdateOneRequiredWithoutVendedoresNestedInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUpdateOneRequiredWithoutVendedoresNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUpdateOneRequiredWithoutVendedoresNestedInput>;
export const EstadoVendedorUpdateOneRequiredWithoutVendedoresNestedInputObjectZodSchema = makeSchema();
