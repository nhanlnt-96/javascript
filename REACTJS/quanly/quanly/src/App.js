import React from 'react';
import './App.css';
import logo from './assets/img/unnamed.png';
import NewStaff from './components/NewStaff';

class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <header>
          <div className="main-header">
            <div className="toolbar">
              <button onClick="">TRANG CHỦ</button>
            </div>
            
            <div className="toolbar">
              <button onClick="">HƯỚNG DẪN</button>
            </div>
            
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            
            <div className="toolbar">
              <button onClick="">THÊM NHÂN VIÊN MỚI</button>
            </div>
            
            <div className="toolbar">
              <button onClick="">QUẢN LÝ NHÂN VIÊN</button>
            </div>
          </div>
        </header>

        <div className="main-body">
          <NewStaff />
        </div>
      </div>
    )
  }
}

export default App;