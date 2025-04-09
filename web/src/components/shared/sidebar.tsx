import React from 'react'
import { DesktopNavBar, MobileNavBar } from './navbar'

export const SideBarWrapper = ({ children }: {children?:React.ReactNode}) => {
    return (
        <div className='w-full h-full p-2 pb-3  lg:p-4 flex flex-col lg:flex-row gap-4'>
            <DesktopNavBar />
            <MobileNavBar />
            <main className='h-[calc(100%-60px)] w-full lg:h-full flex gap-4'>
                {children}
            </main>
        </div>
    )
}
