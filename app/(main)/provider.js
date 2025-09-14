"use client";
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AppSideBar, { AppSidebar } from './_components/AppSideBar'
import WelcomeContainer from './dashboard/_components/WelcomeContainer'
import Provider, { useUser } from '@/app/provider';

function DashboardProvider({children}) {
  return (
    <Provider>

   
    <SidebarProvider>
        <AppSidebar />

              <div className='w-full p-10'>
                 {/* <SidebarTrigger/> */}
                 <WelcomeContainer /> 
                {children}</div>

    </SidebarProvider>
     </Provider>
  
  )
}

export default DashboardProvider