import SidebarLayout from "@/components/SidebarLayout"

export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <SidebarLayout>
        {children}
      </SidebarLayout>
    )
  }