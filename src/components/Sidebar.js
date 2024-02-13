'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaBuromobelexperte, FaBattleNet, FaBuffer, FaCaravan, FcRating } from "react-icons/fa";
import Stack from '@mui/material/Stack';



export default function Sidebar( { children } )
{
    const [ toggle, setToggle ] = useState( false );

    const links = [
        { 'name': 'DashBoard', 'link': '/', 'icon': <FaBuromobelexperte size={30} /> },
        { 'name': 'Projects', 'link': '/projects', 'icon': <FaBattleNet size={30} /> },
        { 'name': 'Tasks', 'link': '/tasks', 'icon': <FaBuffer size={30} /> },
        { 'name': 'Users', 'link': '/users', 'icon': <FaCaravan size={30} /> },
    ];

    const path = usePathname();
    console.log( path );

    return (
        <div className='flex w-fit h-screen'>
            <div
                className={`${!toggle ? ( 'w-72' ) : ( 'w-16' )} bg-black relative text-white`}
            >
                <span className={( () =>
                {
                    if ( toggle )
                    {
                        return (
                            "w-7 h-7 rounded-full bg-white absolute top-4 -right-3 shadow-md shadow-red-800 z-40"
                        );
                    } else
                    {
                        return (
                            "w-7 h-7 rounded-full bg-white absolute top-4 -right-3 shadow-md shadow-red-800 "
                        );
                    }
                } )()}
                    onClick={() => setToggle( !toggle )}
                >
                    {!toggle ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor"
                            className="w-5 h-5 mt-1 ml-1 cursor-pointer"
                        >
                            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 mt-1 ml-1 cursor-pointer"
                        >
                            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    )}
                </span>

                <div className='h-1/6 flex justify-center items-center'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6  rounded-full ring-4 ring-orange-500"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div className='text-2xl font-bold'>
                        &nbsp;Promage
                    </div>
                </div>

                <div className='h-1/6 flex justify-center items-center '>
                    <div className='px-8 py-5 bg-white text-black rounded-full flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>

                        <span>     Create new project</span>
                    </div>
                </div>

                <div className='h-1/2 flex flex-col justify-center items-center gap-10 '>
                    {links.map( ( item ) => (
                        <div className='relative'>
                            {/* <div className='absolute top-0 mt-4 ml-4 text-red-600'> */}
                            <Link
                                href={item.link}
                                className={`${path === item.link && "bg-white text-red-600  px-12 py-5 rounded-full"}`}
                            >
                                {/* {item.icon} */}
                                {item.name}
                            </Link>
                            {/* </div> */}
                        </div>
                    ) )}
                </div>

            </div>

            <div className={`${!toggle ? ( "min-w-[calc(dvh-18rem)]" ) : ( "min-w-[calc(dvh-4rem)]" )}`}>
                {children}
            </div>

        </div>
    );
}
