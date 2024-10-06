import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import {Navbar, Nav} from  'react-bootstrap'
import logo1 from '../static/logo1.png'
import '../App.css'

export default function Navigation() {
  return (
    <div className='row1'>
      <Navbar bg="dark" variant="dark" expand="sm" id="my-nav">
            <Navbar.Brand className="app-logo" href="/">
                <img 
                    src={logo1} 
                    width={35} 
                    height={35} 
                    className='d-inline-block align-center rounded-circle' 
                    alt="React Bootstrap logo" />
                    {" "}
                Student Management System
            </Navbar.Brand>
      </Navbar>
      <div className='sidebar'>
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
            <CDBSidebarHeader prefix={<i className="fa fa-bars mx-2" />}>
                Students Management
            </CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <NavLink exact to="/" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/students" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="list">Students List</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/manage" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Manage Students</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/contacts" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">contacts Students</CDBSidebarMenuItem>
                    </NavLink>
                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    </div>
    </div>
  )
}
