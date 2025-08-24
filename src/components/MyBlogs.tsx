import React from 'react'
import { myBlogs } from '@/data'
import { CometCard } from './ui/comet-card'
import Safari from './ui/safari'
import { FaBookOpen, FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './MagicButton'
import { AuroraText } from './magicui/aurora-text'

export default function MyBlogs() {
    return (
        <div id='blogs' className='w-full mt-6 mb-10'>
            <h1 className="text-4xl md:text-4xl mb-4 lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                A small selection of <br /><AuroraText>My Blogs</AuroraText>
            </h1>

            <div className='w-full flex flex-wrap mb-4 justify-center'>
                {
                    myBlogs.map((blog, i) => {
                        return (
                            <CometCard key={blog.id} className='mx-5 my-5'>
                                <div
                                    className="flex w-96 flex-col items-stretch rounded-[16px] border-0 md:p-4"
                                    aria-label="View invite F7RA"
                                    style={{
                                        transformStyle: "preserve-3d",
                                        transform: "none",
                                        opacity: 1,
                                    }}
                                >

                                    <div>
                                        <Safari url="magicui.design" src={blog.image} className="size-full" />
                                    </div>
                                    <p className='font-mono py-5 px-3'>{blog.title}</p>
                                    <div className='flex flex-nowrap justify-between px-3'>
                                        <span className='font-mono text-sm flex flex-nowrap items-center justify-start text-zinc-400'><FaBookOpen />&nbsp;{blog.readTime}</span>
                                        <a target='_blank' href={blog.link}
                                            className="bg-slate-800 w-[146px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                            </span>
                                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                                <span>
                                                    Read This Blog
                                                </span>
                                                <svg
                                                    fill="none"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    width="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                        </a>
                                    </div>
                                </div>
                            </CometCard>
                        )
                    })
                }
            </div>

            <a href="https://blog.kuntalmaity.in" target='_blank' className='block w-[240px] mx-auto'>
                <MagicButton
                    title="View My All Blogs"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>
    )
}
