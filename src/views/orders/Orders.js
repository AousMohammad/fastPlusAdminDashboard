import React from "react";
import { CCol, CRow } from "@coreui/react";
import DataGridDemo from "./DataGridDemo";
const Orders = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DataGridDemo />
      </CCol>
    </CRow>
  );
};

export default Orders;
