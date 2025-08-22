import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <section className='w-full flex justify-center items-center p-10 py-20 relative bg-black h-screen'>
            <div className="absolute w-1/3 h-96 top-10 left-0 bg-purple-600 rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute w-1/3 h-96 bottom-10 right-0 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>

            <div className="w-full p-10 rounded-xl backdrop-blur-2xl bg-white/10">
                <div className="flex md:flex-row flex-col-reverse w-full justify-between">
                    <div className="flex flex-col">
                        <h1 className='split-text md:text-3xl 2xl font-bold text-title'>Hubungi Kami<span className='underline-gradient'></span></h1>
                        <p className='text-gray-400 md:text-lg text-base mb-4 fade-left'>Jika Anda memiliki pertanyaan atau ingin berkolaborasi, jangan ragu untuk menghubungi kami.</p>
                        <ul className='text-gray-400 text-lg stagger-grid'>
                            <li className='fade-item-left flex items-center gap-2'><MapPin className='w-4 h-4 inline-block' /> Surabaya, Indonesia</li>
                            <li className='fade-item-left flex items-center gap-2'><Mail className='w-4 h-4 inline-block' /> lumino@example.com</li>
                            <li className='fade-item-left flex items-center gap-2'><Phone className='w-4 h-4 inline-block' /> +62812345678</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 md:w-1/2 w-full items-center justify-center stagger-grid">
                        <input type="text" placeholder="Nama" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm fade-item' />
                        <input type="email" placeholder="Email" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm fade-item' />
                        <textarea placeholder="Pesan" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm h-20 resize-none fade-item'></textarea>
                        <button className='px-4 py-2 bg-black rounded-lg md:text-base text-sm flex items-center gap-2 fade-item'>Kirim Pesan <ArrowRight className='w-4 h-4 inline-block' /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact