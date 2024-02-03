"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {

    // use redirect for useRouter
    const router = useRouter();

    const placeorder = () => {
        alert('Order confirm');
        router.push('/');
    };

    return (
        <div>
            <h1 className='font-bold'>Product Page</h1>

            <li className='list-none'>Buy iPhone</li>
            <button className='text-white bg-green-500 py-2 px-5 rounded-full' onClick={placeorder}>Confirm Order</button>
        </div>
    );
};

export default page;