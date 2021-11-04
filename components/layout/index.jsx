import Navbar from '../navbar'
import Sidebar from '../sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </>
  )
}