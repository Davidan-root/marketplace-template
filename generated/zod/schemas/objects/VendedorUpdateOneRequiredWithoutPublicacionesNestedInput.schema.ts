import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorCreateWithoutPublicacionesInputObjectSchema as VendedorCreateWithoutPublicacionesInputObjectSchema } from './VendedorCreateWithoutPublicacionesInput.schema';
import { VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema as VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema } from './VendedorUncheckedCreateWithoutPublicacionesInput.schema';
import { VendedorCreateOrConnectWithoutPublicacionesInputObjectSchema as VendedorCreateOrConnectWithoutPublicacionesInputObjectSchema } from './VendedorCreateOrConnectWithoutPublicacionesInput.schema';
import { VendedorUpsertWithoutPublicacionesInputObjectSchema as VendedorUpsertWithoutPublicacionesInputObjectSchema } from './VendedorUpsertWithoutPublicacionesInput.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema';
import { VendedorUpdateToOneWithWhereWithoutPublicacionesInputObjectSchema as VendedorUpdateToOneWithWhereWithoutPublicacionesInputObjectSchema } from './VendedorUpdateToOneWithWhereWithoutPublicacionesInput.schema';
import { VendedorUpdateWithoutPublicacionesInputObjectSchema as VendedorUpdateWithoutPublicacionesInputObjectSchema } from './VendedorUpdateWithoutPublicacionesInput.schema';
import { VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema as VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema } from './VendedorUncheckedUpdateWithoutPublicacionesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendedorCreateWithoutPublicacionesInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendedorCreateOrConnectWithoutPublicacionesInputObjectSchema).optional(),
  upsert: z.lazy(() => VendedorUpsertWithoutPublicacionesInputObjectSchema).optional(),
  connect: z.lazy(() => VendedorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VendedorUpdateToOneWithWhereWithoutPublicacionesInputObjectSchema), z.lazy(() => VendedorUpdateWithoutPublicacionesInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema)]).optional()
}).strict();
export const VendedorUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema: z.ZodType<Prisma.VendedorUpdateOneRequiredWithoutPublicacionesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpdateOneRequiredWithoutPublicacionesNestedInput>;
export const VendedorUpdateOneRequiredWithoutPublicacionesNestedInputObjectZodSchema = makeSchema();
