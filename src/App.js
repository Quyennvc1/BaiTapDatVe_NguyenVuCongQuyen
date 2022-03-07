import logo from './logo.svg';
import './App.css';
import DatVeXemPhim from './DatVeXemPhim/DatVeXemPhim';
import style from './DatVeXemPhim/BaiTapBookingTicket.module.css';

function App() {
  return (
    <div className={'App '+`${style.bookingMovie}`}>
      <DatVeXemPhim/>
    </div>
  );
}

export default App;
