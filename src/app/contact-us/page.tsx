'use client'
import { Vortex } from '@/components/ui/vortex'
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { toast } from "sonner"

export default function Contact() {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState<boolean>(false);

    const submit = async (data: any) => {
        const { name, email, message } = data;
        try {
            setLoading(true);
            await axios.post("/api/send-mail", {
                name: name,
                email: email,
                message: message,
            });
            reset();
            toast.success("Message sent successfully", {
                description: "We will get back to you soon.",
                duration: 4000,
                closeButton: true
            });
        } catch (error) {
            console.log(error);
            toast.error("Failed to send message", {
                description: "Please try again later.",
                duration: 4000,
                closeButton: true
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
                <div className="pb-12 pt-20 relative" id='contact-me'>
                    <div className="max-w-2xl mx-auto p-4 relative z-10">
                        {' '}
                        {/* Add relative and z-10 to bring content to the front */}
                        <h1 className="text-3xl sm:text-5xl md:text-7xl text-center font-sans font-bold mb-8 dark:text-white text-gray-800">
                            Contact Me
                        </h1>
                        <p className="dark:text-neutral-500 text-neutral-600 max-w-lg mx-auto mb-8 text-sm text-center">
                            If you have any questions or want to work together, feel free to send me a message.
                        </p>
                        <form onSubmit={handleSubmit(submit)} className="space-y-4 mt-4">
                            <input
                                type="text"
                                {...register('name', { required: true })}
                                placeholder="Your name"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full px-4 py-3 bg-gray-700"
                                required
                            />
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                placeholder="Your email address"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full px-4 py-3 bg-gray-700"
                                required
                            />
                            <textarea
                                {...register('message', { required: true })}
                                placeholder="Your message"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-gray-700"
                                rows={4}
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-lg bg-teal-500 block mx-auto text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Vortex>

            <a href="" className="btn-whatsapp-pulse z-[100]">
                <img src={"/whatsapp-svgrepo-com.svg"} alt="icons" className=" rounded-3xl" width={40} height={40} />
            </a>
            {loading && <div className='w-screen h-screen flex items-center justify-center bg-[#00000096] fixed top-0 left-0 z-[40]' >
                <div className='flex items-center justify-center flex-col'>
                    <div className="bar-loader mb-5"></div>
                    <div className="clasic-loader"></div>
                </div>
            </div>}
        </div>
    )
}