import { SideBarWrapper } from '@/components/shared/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'


const layout = ({ children }: {children?:React.ReactNode}) => {
  return (
    <SideBarWrapper>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </SideBarWrapper>
  )
}
export default layout