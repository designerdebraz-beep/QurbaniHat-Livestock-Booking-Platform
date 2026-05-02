"use client"
import { UpdateduserInfo } from '@/component/shared/UpdateduserInfo';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    const usedata = authClient.useSession();
    const user = usedata.data?.user;
    return (
        <div className='flex flex-col items-center mt-5'>
            <div>
                <Image
                    src={user?.image}
                    referrerPolicy='no-referrer'
                    alt={user?.name || "User"}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                />
            </div>
            {user?.name}
            <div>
                {user?.email}
            </div>
            <UpdateduserInfo></UpdateduserInfo>
        </div>
    );
};

export default ProfilePage;