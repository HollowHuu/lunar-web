'use client';

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import HeaderDropdown from './header-dropdown';

export default function Header() {

    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    // if(!mounted) return null;
    return (
        <div className="flex items-center h-[60px] text-right m-0 right-0 left-0 top-0 font-medium">
            <img className='mr-[16px]' src="https://cdn.discordapp.com/attachments/774650675593609268/1136331735265722408/Bot_logo_witout_back.png" alt="logo" width="40" />
            <a href="/">Lunar App</a>
            <div className="flex-auto text-center justify-evenly text-lg">
                <a href="/profile" className="p-5 ">
                    <span className=''>Profile</span>
                    {/* <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg> */}
                </a>

                <a href="/search" className='p-5'>
                    <span>Search</span>
                    {/* <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg> */}
                </a>
            </div>
            <div className="relative inline-block text-white ">
                <img src="/menu.svg" alt="" onClick={toggleMenu} />
                {isMenuOpen && (
                    <HeaderDropdown></HeaderDropdown>
                )}
            </div>
        </div>
    )
}