/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_sellerId_fkey";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Category";

-- DropEnum
DROP TYPE "OrderStatus";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "usuario" (
    "id" BIGSERIAL NOT NULL,
    "direccionUsuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombreUsuario" TEXT NOT NULL,
    "numeroContacto" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "estadoUsuarioId" BIGINT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado_usuario" (
    "id" BIGSERIAL NOT NULL,
    "descripcionEU" TEXT NOT NULL,
    "nombreEU" TEXT NOT NULL,

    CONSTRAINT "estado_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendedor" (
    "id" BIGSERIAL NOT NULL,
    "nombreTienda" TEXT NOT NULL,
    "reputacion" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "usuarioId" BIGINT NOT NULL,
    "estadoVendedorId" BIGINT NOT NULL,

    CONSTRAINT "vendedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado_vendedor" (
    "id" BIGSERIAL NOT NULL,
    "descripcionEV" TEXT NOT NULL,
    "nombreEV" TEXT NOT NULL,

    CONSTRAINT "estado_vendedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publicacion" (
    "id" BIGSERIAL NOT NULL,
    "condicionesVenta" TEXT NOT NULL,
    "enviosVenta" BOOLEAN NOT NULL,
    "precioVenta" DOUBLE PRECISION NOT NULL,
    "stockVenta" INTEGER NOT NULL,
    "vendedorId" BIGINT NOT NULL,
    "productoId" BIGINT NOT NULL,

    CONSTRAINT "publicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "producto" (
    "id" BIGSERIAL NOT NULL,
    "descripcionProducto" TEXT NOT NULL,
    "nombreProducto" TEXT NOT NULL,
    "categoriaId" BIGINT NOT NULL,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" BIGSERIAL NOT NULL,
    "descripcionCategoria" TEXT NOT NULL,
    "nombreCategoria" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carrito" (
    "id" BIGSERIAL NOT NULL,
    "fechaHoraAlta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaHoraBaja" TIMESTAMP(3),
    "fechaHoraModificacion" TIMESTAMP(3),
    "usuarioId" BIGINT NOT NULL,

    CONSTRAINT "carrito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carrito_item" (
    "id" BIGSERIAL NOT NULL,
    "cantidadCI" INTEGER NOT NULL,
    "carritoId" BIGINT NOT NULL,
    "publicacionId" BIGINT NOT NULL,

    CONSTRAINT "carrito_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" BIGSERIAL NOT NULL,
    "fechaHoraAlta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numeroPedido" INTEGER NOT NULL,
    "totalPrecio" DOUBLE PRECISION NOT NULL,
    "usuarioId" BIGINT NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido_item" (
    "id" BIGSERIAL NOT NULL,
    "cantidadPI" INTEGER NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "subtotalPI" DOUBLE PRECISION NOT NULL,
    "pedidoId" BIGINT NOT NULL,
    "publicacionId" BIGINT NOT NULL,

    CONSTRAINT "pedido_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pago" (
    "id" BIGSERIAL NOT NULL,
    "metodoPago" TEXT NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "pedidoId" BIGINT NOT NULL,

    CONSTRAINT "pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "envio" (
    "id" BIGSERIAL NOT NULL,
    "estadoEnvio" TEXT NOT NULL,
    "numeroEnvio" INTEGER NOT NULL,
    "pedidoId" BIGINT NOT NULL,

    CONSTRAINT "envio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resena" (
    "id" BIGSERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "fechaHoraAlta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "puntaje" INTEGER NOT NULL,
    "productoId" BIGINT NOT NULL,

    CONSTRAINT "resena_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "vendedor_usuarioId_key" ON "vendedor"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_numeroPedido_key" ON "pedido"("numeroPedido");

-- CreateIndex
CREATE UNIQUE INDEX "envio_pedidoId_key" ON "envio"("pedidoId");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_estadoUsuarioId_fkey" FOREIGN KEY ("estadoUsuarioId") REFERENCES "estado_usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendedor" ADD CONSTRAINT "vendedor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendedor" ADD CONSTRAINT "vendedor_estadoVendedorId_fkey" FOREIGN KEY ("estadoVendedorId") REFERENCES "estado_vendedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_vendedorId_fkey" FOREIGN KEY ("vendedorId") REFERENCES "vendedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrito" ADD CONSTRAINT "carrito_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrito_item" ADD CONSTRAINT "carrito_item_carritoId_fkey" FOREIGN KEY ("carritoId") REFERENCES "carrito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrito_item" ADD CONSTRAINT "carrito_item_publicacionId_fkey" FOREIGN KEY ("publicacionId") REFERENCES "publicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_item" ADD CONSTRAINT "pedido_item_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_item" ADD CONSTRAINT "pedido_item_publicacionId_fkey" FOREIGN KEY ("publicacionId") REFERENCES "publicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pago" ADD CONSTRAINT "pago_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "envio" ADD CONSTRAINT "envio_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resena" ADD CONSTRAINT "resena_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
