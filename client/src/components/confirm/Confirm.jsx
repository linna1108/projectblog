import { Context } from "../../context/Context";
import "./confirm.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Confirm({ message,onConfirm,post }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>{message}</h3>
        <div className="popup-choose">
          <button className="btnDelete" onClick={() => onConfirm(true)}>
            Yes
          </button>
          <button className="btnCancel" >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
