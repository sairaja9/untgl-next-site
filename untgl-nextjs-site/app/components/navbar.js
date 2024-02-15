'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";


export default function navbar() {
    const pathname = usePathname();

    return (
        <div className="pt-12 px-[10%] bg-transparent h-min w-full flex justify-between items-center text-lg">
            <div className="flex justify-between w-32">
                <Link href="https://www.instagram.com/untglmarketing/" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
                <Link href="https://www.facebook.com/untglmarketing" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
                <Link href="https://twitter.com/untglmarketing" target="_blank" rel="noopener noreferrer"><FaXTwitter /></Link>
            </div>
            <div className="text-center w-2/5">
                <h1 className={`font-heading text-4xl pb-6`}>UNTGL MARKETING</h1>
                <nav className="flex justify-between font-body">
                    {[
                        {title: 'Home', url: '/'},
                        {title: 'About', url: '/about'},
                        {title: 'Services', url: '/services'},
                        {title: 'Consultation', url:'/consultation'},
                        {title: 'Projects', url:'/projects'},
                        {title: 'Contact', url: '/contact'},
                    ].map((link) => (
                    <Link href={link.url} className={` ${pathname === link.url ? 'underline underline-offset-8' : ''}`}>{link.title}</Link>
                    ))}
                </nav>
            </div>
            <Link href='/consultation' className="bg-grey text-black py-4 px-7 text-base font-body font-bold">Work With Us</Link>
        </div>
    );
}