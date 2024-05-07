import React from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { SlFire } from "react-icons/sl";

const Home = () => {
  return (
    <div className="home-container">
      {/* HEADER */}
      <div className="flex justify-between pt-10 bg-black text-white px-36">
        <div className="flex flex-col gap-4 mt-40">
          <h1>FIND MOVIES</h1>
          <h2 className="bg-gradient-to-r from-blue-500 to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold">
            TV SHOWS AND MORE
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
            Esse, vel placeat hic praesentium rem eius voluptatem.<br></br>
            Non dolor unde alias earum adipisci quas ab ex dicta,<br></br>
            doloribus, distinctio sapiente minima.
          </p>
          <button className=" border border-white rounded-lg w-48">
            <div className="flex justify-center gap-3">
              <BiSolidRightArrowCircle className=" mt-1" />
              Watch Tutorial
            </div>
          </button>
        </div>
        <div className="relative">
          <img
            src="/spideman.jfif"
            className="absolute top-20 right-52 w-[19rem]"
          />
          <img src="/home.jfif" className="w-[19rem]" />
        </div>
      </div>

      {/* TRENDING MOVIES SECTION */}
      <div className="px-36 mt-10">
        <div className="flex justify-between">
          <div className="flex">
            {/* <SlFire className="mt-2 text-orange-500" /> */}
            <p className="text-2xl font-bold">Trending</p>
          </div>
          <p>See More</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 ml-5">
         
        </div>
      </div>
      <div className='mt-36 bg-black text-white px-36'>
        <div className=' flex justify-between'>
            <div className=' flex'>
                <SlFire className=' mt-2 text-orange-500 '/>
                <p className='text-2xl font-bold mb-8 underline underline-offset-8'>Trending</p>
            </div>
            <p>See More</p>
        </div>
        <div className=' grid grid-cols-2 lg:grid-cols-6 ml-5'>
            <div>
            <img src='https://media.themoviedb.org/t/p/w220_and_h330_face/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Grey's Anatomy </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15671028.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Nohard Feelings </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15789038.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th?id=OIP.1umjRUVLTbPQCPVU_q1HPgHaK-&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' className=' w-[10rem] h-[15rem]'/>
                <h2>Monster House </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th?id=OIP.AkqQU6wiR_50f-Qd-jYA7wAAAA&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th?id=OIP.c3VjSn9aWHYI-JidQavqcgHaK-&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th?id=OIP.ng38lIHD2D_dQre8DTxjhgHaKs&w=207&h=300&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th?id=OIP.-6TGwYgfzcuBNWDjjEOpHQHaKs&w=207&h=300&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15671028.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15789038.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <var><div>
            <img src='https://www.cinematerial.com/media/box-office/15671028.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div></var>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15789038.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            
            <div>
            <img src='https://media.themoviedb.org/t/p/w220_and_h330_face/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Grey's Anatomy </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15789038.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th/id/OIP.lCCF16OW0J2XccCvI2EMLAHaFz?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15789038.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th/id/OIP.lCCF16OW0J2XccCvI2EMLAHaFz?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15789038.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th/id/OIP.lCCF16OW0J2XccCvI2EMLAHaFz?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15789038.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://www.cinematerial.com/media/box-office/15789038.jpg' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th/id/OIP.lCCF16OW0J2XccCvI2EMLAHaFz?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th/id/OIP.F692_A4wUlXT2tinQD78IAHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' className=' w-[10rem] h-[15rem]'/>
                <h2>Gruation of the </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
            <div>
            <img src='https://th.bing.com/th/id/OIP.RfvLcszz01EYMkxbkV657AHaLG?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' className=' w-[10rem] h-[15rem]'/>
                <h2>Keluarga Cemara </h2>
                <div className='flex gap-1'>
                    <p>2023</p>
                    <p>.104m</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Home;
