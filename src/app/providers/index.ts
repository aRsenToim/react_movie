import React from "react"
import Home from "../../pages/home"
import Search from "../../pages/search"
import Profile from "../../pages/profile"
import Film from "../../pages/film"



export interface IRoute {
 path: string
 element: React.ElementType
}

enum RoutesNames {
 Home = '/',
 Search = '/search',
 Profile = '/profile',
 film = '/film/:id'
}


export const routes: IRoute[] = [
 {
  path: RoutesNames.Home,
  element: Home
 },
 {
  path: RoutesNames.Search,
  element: Search
 },
 {
  path: RoutesNames.Profile,
  element: Profile
 },
 {
  path: RoutesNames.film,
  element: Film
 }
]