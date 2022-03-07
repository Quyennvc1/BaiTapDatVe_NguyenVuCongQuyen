import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './BaiTapBookingTicket.module.css';

export class GheItem extends Component {
  render() {
    let {soGhe, gia, daDat} = this.props.ghe;
    let dangChon = this.props.danhSachGheChon.find(item => item.soGhe == soGhe);
    if(!isNaN(soGhe)) {
          return <td>
              <div className={`${style.rowNumber}`}>{soGhe}</div>
            </td>
    } else {
        if(daDat) {
          return <td>
              <div className={`${style.gheDuocChon}`}>{soGhe}</div>
            </td>
        } else {
          return <td>
              <div className={dangChon ? `${style.gheDangChon}` : `${style.ghe}`} onClick={() => {this.props.chonCho(this.props.ghe)}}>{soGhe}</div>
            </td>
        }
    }
  }
}

const mapStateToProps = (state) => ({
  danhSachGheChon: state.baiTapDatVeReducer.danhSachGheChon
})

const mapDispatchToProps = (dispatch) => {
  return {
    chonCho: (ghe) => {
      const action = {
        type: 'CHON_CHO',
        ghe
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GheItem)