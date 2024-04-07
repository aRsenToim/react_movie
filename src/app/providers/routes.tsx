import { FC } from "react"
import { Routes, Route } from 'react-router-dom'
import { IRoute, routes } from "."
import BaseLayout from "../layouts/baseLayout/baseLayout"



const RoutesApp: FC = () => {
 return <Routes>
  <Route path="/" element={<BaseLayout />}>
   {routes.map((route: IRoute) => <Route path={route.path} key={route.path} element={<route.element />} />)}
  </Route>
 </Routes>
}


export default RoutesApp