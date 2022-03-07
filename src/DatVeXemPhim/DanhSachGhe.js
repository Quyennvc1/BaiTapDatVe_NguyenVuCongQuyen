import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './BaiTapBookingTicket.module.css';
import GheItem from './GheItem';

export class DanhSachGhe extends Component {
    renderDanhSachGhe = () => {
        return this.props.danhSachGhe.map((item, index) => {
            return <tr key={index}>
                    <td className={`${style.firstChar}`}>{item.hang}</td>
                    {item.danhSachGhe.map((ghe, stt) => {
                        return <GheItem key={stt} ghe={ghe}/>
                    })}
                </tr>
        })
    }

  render() {
    return (
        <div className="col-md-8">
            <h3 className={'text-center text-uppercase '+`${style.title}`}>đặt vé xem phim cyberlearn.vn</h3>
            <p className='text-white text-center'>Màn hình</p>
            <div className={`${style.screen}`}></div>
            <table style={{margin: 'auto'}}>
                <tbody className='text-center'>
                    {this.renderDanhSachGhe()}
                </tbody>
            </table>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    danhSachGhe: state.baiTapDatVeReducer.danhSachGhe,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe)