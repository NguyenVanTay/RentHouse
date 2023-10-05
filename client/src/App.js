/** @format */

import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  RentalRoom,
  RentalSpace,
  RetalApartment,
  RentalHouse,
} from "./containers/Public";
import { path } from "./utils/constant";
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RetalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_NHA} element={<RentalHouse />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
