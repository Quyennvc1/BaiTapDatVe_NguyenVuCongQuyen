import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './BaiTapBookingTicket.module.css';

export class DanhSachGheDaChon extends Component {
  renderTable = () => {
    if (this.props.danhSachGheChon.length > 0) {
      const formatter = (n, currency) => {
        return currency + n.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }
      return this.props.danhSachGheChon.map((item,index) => {
        return <tr key={index}><th>{item.soGhe}</th><th>{formatter(item.gia, '')}</th><th><span className='text-danger' role="button" onClick={() => {this.props.boChon(item.soGhe)}}>x</span></th></tr>})
    }
  }

  tongTien = () => {
    return this.props.danhSachGheChon.reduce((tong, item, index) => {
      return tong += item.gia;
    },0);
  }

  render() {
    return (
      <div className='col-md-4'>
        <h3 className='text-white text-uppercase text-center mt-5'>danh sách ghế bạn chọn</h3>
        <ul className='text-white' type='none'>
          <li><div style={{width: '20px', height: '20px', display: 'inline-block', background: 'orange', borderRadius: '3px'}}></div> Ghế đã đặt</li>
          <li><div style={{width: '20px', height: '20px', display: 'inline-block', background: 'rgb(109, 238, 109)', borderRadius: '3px'}}></div> Ghế đang chọn</li>
          <li><div style={{width: '20px', height: '20px', display: 'inline-block', background: '#fff', border: '3px solid orange', borderRadius: '3px'}}></div> Ghế chưa đặt</li>
        </ul>
        <table className={`${style.tableDaChon}`} border='1'>
          <thead>
            <tr>
              <th className='text-white'>Số ghế</th>
              <th className='text-white'>Giá</th>
              <th className='text-white'>Hủy</th>
            </tr>
            {this.renderTable()}
            <tr>
              <th className='text-white'>Tổng tiền</th>
              <th>{this.tongTien()}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({danhSachGheChon: state.baiTapDatVeReducer.danhSachGheChon})

const mapDispatchToProps = (dispatch) => {
  return {
    boChon: (soGhe) => {
      const action = {
        type: 'BO_CHON',
        soGhe
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGheDaChon)