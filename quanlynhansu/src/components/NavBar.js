import React from 'react';
import logo from '../assets/img/logo.png';

export const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="left-bar">
                <img src={logo} alt="logo" />
                <div className="logo-title">
                    <h1>HỆ THỐNG GIÁO DỤC</h1>
                    <h1>TÂN VĂN</h1>
                </div>
            </div>

            <div className="right-bar">
                <button>TRANG CHỦ</button>

                <div className="dropdown">
                    <button>QUẢN LÝ NHÂN SỰ</button>
                    <ul>
                        <li>THÊM NHÂN VIÊN MỚI</li>
                        <li>THÔNG TIN NHÂN VIÊN</li>
                        <li>CHẤM CÔNG</li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button>PHÂN CÔNG GIÁO VIÊN</button>
                    <ul>
                        <li>GIÁO VIÊN VIỆT NAM</li>
                        <li>GIÁO VIÊN NƯỚC NGOÀI</li>
                    </ul>
                </div>
            </div>

            <div className="burger-nav">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    );
}