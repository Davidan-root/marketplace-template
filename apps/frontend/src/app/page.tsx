import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UsuarioUncheckedCreateInputObjectSchema } from '../../../../generated/zod/schemas/objects/UsuarioUncheckedCreateInput.schema';

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(UsuarioUncheckedCreateInputObjectSchema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <input {...register('nombreUsuario')} placeholder="Nombre" className="border p-2 w-full" />
          {errors.nombreUsuario && <p className="text-red-500">{errors.nombreUsuario.message}</p>}
          <input {...register('email')} placeholder="Email" className="border p-2 w-full mt-2" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          <input {...register('direccionUsuario')} placeholder="Dirección" className="border p-2 w-full mt-2" />
          {errors.direccionUsuario && <p className="text-red-500">{errors.direccionUsuario.message}</p>}
          <input {...register('numeroContacto')} placeholder="Número" className="border p-2 w-full mt-2" />
          {errors.numeroContacto && <p className="text-red-500">{errors.numeroContacto.message}</p>}
          <input {...register('passwordHash')} type="password" placeholder="Password" className="border p-2 w-full mt-2" />
          {errors.passwordHash && <p className="text-red-500">{errors.passwordHash.message}</p>}
          <input {...register('estadoUsuarioId')} type="number" placeholder="Estado Usuario ID" className="border p-2 w-full mt-2" />
          {errors.estadoUsuarioId && <p className="text-red-500">{errors.estadoUsuarioId.message}</p>}
          <button type="submit" className="bg-blue-500 text-white p-2 w-full mt-4">Crear Usuario</button>
        </form>
      </main>
    </div>
  );
}
