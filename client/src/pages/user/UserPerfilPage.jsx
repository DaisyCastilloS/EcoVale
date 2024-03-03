import React from 'react';
import { Link } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import analiticaImg from '../../assets/analitica.svg';
import { CardVoucher } from '../../components/Cards/CardVoucher';
import { BsTicketPerforated, BsBagDash } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import codigoqrImg from '../../assets/codigoqr.svg';
import entradasImg from '../../assets/entradas.svg';
import SimpleDonut from '../../components/Chart/SimpleDonut';
import { DetailCard } from '../../components/ui/Cards/DetailCard';
import { CardButton } from '../../components/ui/Buttons/CardButton';
export default function UserPerfilPage() {
    const details = [
        {
          icon: <BsTicketPerforated />,
          title: 'Vales',
          quantity: '7000',
        },
        {
          icon: <BsBagDash />,
          title: 'Articulo 2',
          quantity: '7000Kg',
        },
        {
          icon: <FaRegStar />,
          title: 'Articulo 3',
          quantity: '4.8',
        },
    ];
  return (
    <div className="h-[100vh] pt-40 bg-bgGreen text-darkBlue flex flex-col gap-y-3 mt-10">


      <div className="fixed top-0 w-full z-50 bg-darkBlue border-t border-gray-500 shadow-md rounded-b-[40px] px-5 pb-7 pt-10 flex justify-between items-center text-white">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-5">
            <div className="relative bg-gray-100 w-[100px] h-[100px] rounded-full mx-auto">
              <img src="" alt="" className="" />
            </div>
            <div>
              <p className="text-2xl font-semibold">Andreina Godoy</p>
              <Link to={'/user/configuration/edit'} className="text-sm underline">
                Editar perfil
              </Link>
            </div>
          </div>
          <span className="text-2xl">
            <IoMenuSharp />
          </span>
        </div>
      </div>




      <div className='flex justify-between gap-x-5 px-5'>
        <Link to={'/user/codigo-canje'} className='bg-white w-full rounded-[10px] px-2 py-3'>
          <img src={codigoqrImg} alt="" className='mx-auto mb-2 h-[60px]'/>
          <p className='text-base text-center font-semibold'>Código de canjeo</p>
        </Link>
        <Link to={'/user/vales'} className='bg-white w-full rounded-[10px] px-2 py-3'>
          <img src={entradasImg} alt="" className='mx-auto mb-2 h-[60px]'/>
          <p className='text-base text-center font-semibold'>Vourchers a canjear</p>
        </Link>
      </div>

      <div className="bg-white flex justify-between py-3 px-6 rounded-[10px] mx-5">
        {details.map(({ icon, title, quantity }, i) => (
          <div key={i} className="flex flex-col gap-1 items-center font-medium">
            <span className="text-2xl text-[#19CFD2]">{icon}</span>
            <h2 className="text-sm">{title}</h2>
            <p className="text-xl">{quantity}</p>
          </div>
        ))}
      </div>


      <div className='mx-5'><DetailCard
        title="Mi progreso"
        description="Lorem Ipsumis simply dummy text of the printing and typesetting industry."
      >
        <SimpleDonut />
      </DetailCard></div>


      <div className='mx-5 bg-white p-4 rounded-[10px]'>
        <p className='text-xl font-bold mb-2'>Canjes en Febrero</p>
        <div className='flex justify-between'>
          <div className='text-sm flex flex-col gap-y-2'>
            <p>Valores en relación al mes anterior </p>
            <div className='flex justify-between'>
              <p>Vauches</p>
              <div className='w-24 h-3 bg-bgGreen rounded-2xl'><div className='bg-red-400 w-14 h-3 rounded-2xl'></div></div>
            </div>
            <div className='flex justify-between'>
              <p>Vales</p>
              <div className='w-24 h-3 bg-bgGreen rounded-2xl'><div className='bg-greenMain w-20 h-3 rounded-2xl'></div></div>
            </div>
            <div className='flex justify-between'>
              <p>Reciclaje</p>
              <div className='w-24 h-3 bg-bgGreen rounded-2xl'><div className='bg-darkBlue w-10 h-3 rounded-2xl'></div></div>
            </div>
          </div>
          <img src={analiticaImg} alt="" />
        </div>
        <p className='text-center mt-5 text-xl font-[350]'>Estás haciendo una gran labor!</p>
      </div>
    </div>

      
  );
}
