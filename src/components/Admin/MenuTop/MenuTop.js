import React from "react";
import { Button } from "antd";
import { MenuFoldOutlined,MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';

import logo from '../../../assets/img/png/logo-white.png';

import './MenuTop.scss';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed }= props;

    return (
        <div className="menu-top">
            <div className="menu-top-left">
                <img 
                    className="menu-top-left-logo" 
                    src={logo}
                    alt="logo"/>
                <Button type="link" onClick= { () => setMenuCollapsed(!menuCollapsed) }>
                {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div> 
            <div className="menu-top-right"> 
            <Button type="link" onClick= { () => console.log("Click Log Out") }>
                <PoweroffOutlined />
            </Button>
            </div>
        </div> 
    );

}