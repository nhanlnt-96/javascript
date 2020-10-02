import React from 'react';
import '../App.css';
class NewStaff extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">THÊM NHÂN VIÊN MỚI</h1>
                <div className="form">
                    <div className="general-info">
                        <div className="input-info">
                            <label for="name">Họ và tên</label>
                            <input id="name" type="text" required />
                        </div>
                        
                        <div className="input-info">
                            <label for="dob">Ngày sinh</label>
                            <input id="dob" type="date" required />
                        </div>
                        
                        <div className="input-info">
                            <label for="pob">Nơi sinh</label>
                            <select id="pob" required>
                                <option></option>
                                <option>An Giang</option>
                                <option>Bà Rịa - Vũng Tàu</option>
                                <option>Bắc Giang</option>
                                <option>Bắc Kạn</option>
                                <option>Bạc Liêu</option>
                                <option>Bắc Ninh</option>
                                <option>Bến Tre</option>
                                <option>Bình Định</option>
                                <option>Bình Dương</option>
                                <option>Bình Phước</option>
                                <option>Bình Thuận</option>
                                <option>Cà Mau</option>
                                <option>Cao Bằng</option>
                                <option>Đắk Lắk</option>
                                <option>Đắk Nông</option>
                                <option>Điện Biên</option>
                                <option>Đồng Nai</option>
                                <option>Đồng Tháp</option>
                                <option>Gia Lai</option>
                                <option>Hà Giang</option>
                                <option>Hà Nam</option>
                                <option>Hà Tĩnh</option>
                                <option>Hải Dương</option>
                                <option>Hậu Giang</option>
                                <option>Hòa Bình</option>
                                <option>Hưng Yên</option>
                                <option>Khánh Hòa</option>
                                <option>Kiên Giang</option>
                                <option>Kon Tum</option>
                                <option>Lai Châu</option>
                                <option>Lâm Đồng</option>
                                <option>Lạng Sơn</option>
                                <option>Lào Cai</option>
                                <option>Long An</option>
                                <option>Nam Định</option>
                                <option>Nghệ An</option>
                                <option>Ninh Bình</option>
                                <option>Ninh Thuận</option>
                                <option>Phú Thọ</option>
                                <option>Quảng Bình</option>
                                <option>Quảng Nam</option>
                                <option>Quảng Ngãi</option>
                                <option>Quảng Ninh</option>
                                <option>Quảng Trị</option>
                                <option>Sóc Trăng</option>
                                <option>Sơn La</option>
                                <option>Tây Ninh</option>
                                <option>Thái Bình</option>
                                <option>Thái Nguyên</option>
                                <option>Thanh Hóa</option>
                                <option>Thừa Thiên Huế</option>
                                <option>Tiền Giang</option>
                                <option>Trà Vinh</option>
                                <option>Tuyên Quang</option>
                                <option>Vĩnh Long</option>
                                <option>Vĩnh Phúc</option>
                                <option>Yên Bái</option>
                                <option>Phú Yên</option>
                                <option>Cần Thơ</option>
                                <option>Đà Nẵng</option>
                                <option>Hải Phòng</option>
                                <option>Hà Nội</option>
                                <option>TP. Hồ Chí Minh</option>
                            </select>
                        </div>

                        <div className="input-info">
                            <label for="phoneNumber">Số điện thoại</label>
                            <input id="phoneNumber" type="number" required />
                        </div>
                    </div>

                    <div className="detail-info">
                        <div className="detail-info-part-1">
                            <div className="input-info">
                                <label for="idNumber">Số CMND/CCCD</label>
                                <input id="idNumber" type="number" required />
                            </div>
                            
                            <div className="input-info">
                                <label for="issuedOn">Ngày cấp</label>
                                <input id="issuedOn" type="date" required />
                            </div>
                            
                            <div className="input-info">
                                <label for="issuedAt">Nơi cấp</label>
                                <select id="issuedAt" required>
                                    <option></option>
                                    <option>An Giang</option>
                                    <option>Bà Rịa - Vũng Tàu</option>
                                    <option>Bắc Giang</option>
                                    <option>Bắc Kạn</option>
                                    <option>Bạc Liêu</option>
                                    <option>Bắc Ninh</option>
                                    <option>Bến Tre</option>
                                    <option>Bình Định</option>
                                    <option>Bình Dương</option>
                                    <option>Bình Phước</option>
                                    <option>Bình Thuận</option>
                                    <option>Cà Mau</option>
                                    <option>Cao Bằng</option>
                                    <option>Đắk Lắk</option>
                                    <option>Đắk Nông</option>
                                    <option>Điện Biên</option>
                                    <option>Đồng Nai</option>
                                    <option>Đồng Tháp</option>
                                    <option>Gia Lai</option>
                                    <option>Hà Giang</option>
                                    <option>Hà Nam</option>
                                    <option>Hà Tĩnh</option>
                                    <option>Hải Dương</option>
                                    <option>Hậu Giang</option>
                                    <option>Hòa Bình</option>
                                    <option>Hưng Yên</option>
                                    <option>Khánh Hòa</option>
                                    <option>Kiên Giang</option>
                                    <option>Kon Tum</option>
                                    <option>Lai Châu</option>
                                    <option>Lâm Đồng</option>
                                    <option>Lạng Sơn</option>
                                    <option>Lào Cai</option>
                                    <option>Long An</option>
                                    <option>Nam Định</option>
                                    <option>Nghệ An</option>
                                    <option>Ninh Bình</option>
                                    <option>Ninh Thuận</option>
                                    <option>Phú Thọ</option>
                                    <option>Quảng Bình</option>
                                    <option>Quảng Nam</option>
                                    <option>Quảng Ngãi</option>
                                    <option>Quảng Ninh</option>
                                    <option>Quảng Trị</option>
                                    <option>Sóc Trăng</option>
                                    <option>Sơn La</option>
                                    <option>Tây Ninh</option>
                                    <option>Thái Bình</option>
                                    <option>Thái Nguyên</option>
                                    <option>Thanh Hóa</option>
                                    <option>Thừa Thiên Huế</option>
                                    <option>Tiền Giang</option>
                                    <option>Trà Vinh</option>
                                    <option>Tuyên Quang</option>
                                    <option>Vĩnh Long</option>
                                    <option>Vĩnh Phúc</option>
                                    <option>Yên Bái</option>
                                    <option>Phú Yên</option>
                                    <option>Cần Thơ</option>
                                    <option>Đà Nẵng</option>
                                    <option>Hải Phòng</option>
                                    <option>Hà Nội</option>
                                    <option>TP. Hồ Chí Minh</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="detail-info-part-2">
                            <div className="input-info">
                                <label for="permanenceAddress">Địa chỉ thường trú</label>
                                <input id="permanenceAddress" type="text" required />
                            </div>
                            
                            <div className="input-info">
                                <label for="address">Nơi ở hiện tại</label>
                                <input id="address" type="text" required />
                            </div>
                        </div>
                    </div>

                    <div className="submit">
                        <button onClick="">Thêm mới</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewStaff; 