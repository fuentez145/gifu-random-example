import { AppSidebar } from "@/components/app-sidebar"

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

const SidebarLayout = ({
    children,
    title,
    description,
} : {
    children: React.ReactNode,
    title?: string,
    description?: string,
}) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
               
               {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

export default SidebarLayout