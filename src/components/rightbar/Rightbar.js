import React from "react";
import "./rightbar.css";
import ava from "../../icons/ava.png";
import drop from "../../icons/drop.png";
import wallet from "../../icons/Wallet.png";
import send from "../../icons/send.png";
import cancel from '../../icons/deposit.png';

import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";

export const Rightbar = () => {
  return (
    <div className="main-rightbar">
      <div className="ava">
        <button className="avaLink">
          <img src={ava} style={{ marginRight: "15px" }}></img>
          <span style={{ marginRight: "10px" }}>Avalanche</span>
          <img src={drop} style={{ marginRight: "5px" }}></img>
        </button>
      </div>
      <div className="wallet">
        <button className="walletLink">
          <img src={wallet} style={{ marginRight: "15px" }}></img>
          <span style={{ marginRight: "10px" }}>0xf6...1353</span>
          <img src={drop} style={{ marginRight: "5px" }}></img>
        </button>
      </div>
      <div className="linkc">
        <KeyboardBackspaceSharpIcon
          style={{ color: "white", marginTop: "80px", marginLeft: "30px" }}
        />
        <p className="clink"> Custom Link</p>
        <p style={{ color: "white", marginTop: "20px", marginLeft: "33px" }}>
          https://testnet.xyz.xyz/trade?ref=
        </p>
        <div className="link" style={{ marginTop: "30px", marginLeft: "35px" }}>
          <p className="ref-link" style={{ color: "#808191" }}>
            Enter{" "}
          </p>
          <button className="customlink" style={{marginRight:"20px"}}>
            <img src={send} style={{ marginRight: "10px" }}></img>
            Custom Link
          </button>
          <img src={cancel} className="cancel"></img>
          <span className="canceltxt">Cancel</span>
        </div>
      </div>
    </div>
  );
};
