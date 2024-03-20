/** @format */

import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  RentalRoom,
  RentalSpace,
  RetalApartment,
  RentalHouse,
  HomePage,
  DetailPost,
} from "./containers/Public";
import { path } from "./utils/constant";
import Checkout from "./containers/Public/Checkout";
function App() {
  return (
    <div className=" bg-primary ">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={"*"} element={<HomePage />} />
          <Route path={path.HOME_PAGE} element={<HomePage />} />

          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RetalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_NHA} element={<RentalHouse />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />

          <Route path={path.CHECKOUT} element={<Checkout />} />
          <Route path={path.CHI_TIET_BAI_DANG__TITLE_POSTID} element={<DetailPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
