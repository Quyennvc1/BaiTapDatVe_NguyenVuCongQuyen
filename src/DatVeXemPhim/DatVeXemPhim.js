import React, { Component } from 'react'
import DanhSachGhe from './DanhSachGhe';
import DanhSachGheDaChon from './DanhSachGheDaChon';

export default class DatVeXemPhim extends Component {
  render() {
    return (
      <div className='container-fluid'>
        
        <div className="row">
        <div className="overlay" style={{width: '100%', height: '100%', background: '#0008', position: 'absolute'}}></div>
          <DanhSachGhe/>
          <DanhSachGheDaChon/>
        </div>
      </div>
    )
  }
}
