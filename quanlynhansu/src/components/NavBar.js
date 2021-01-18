import React from 'react';
import logo from '../assets/img/logo.png';
import { Menu, Dropdown, Button, Space } from 'antd';
import '../App.css';
import 'antd/dist/antd.css';

export const NavBar = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    3rd menu item
      </a>
            </Menu.Item>
        </Menu>
    )
    return (
        <div className="NavBar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>HỆ THỐNG GIÁO DỤC TÂN VĂN</h1>
            </div>

            <div className="navbar-menu">
                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overplay={menu} placement="bottomCenter">
                            <Button>Nhan</Button>
                        </Dropdown>
                    </Space>
                </Space>
            </div>
        </div>
    );
}