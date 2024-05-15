import { Outlet } from "react-router-dom"

const BaseDashboard = () => {
  return (
    <>
        <h1>BaseDashboard</h1>
        <Outlet/>
    </>
  )
}

export default BaseDashboard