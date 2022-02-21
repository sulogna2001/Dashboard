import React from "react";
import "./content.css";
import send from "../../icons/send.png";

export const Table = ({
  item: { i, asset, amount, type, state, img, user, referral_earnings, chain },
}) => {
  return (
    <>
      <tr key={i} className="row">
        <td>
          <img src={img} className="image" />
          <p className="asset">{asset}</p>
          <div className="type">
            {type}
            <button className="btn">
              <img src={chain.img} />
              {chain.name}
            </button>
          </div>
        </td>
        <td>
          <p className="amt">{amount} BNB</p>
          <p className="exp">{state} </p>
        </td>
        <td>
          <p className="uid">
            {user.length > 5
              ? `${user.substring(0, 5)}...` +
                `${user.substring(user.length - 7, user.length)}`
              : user}
          </p>
        </td>
        <td>
          <p className="earn">{referral_earnings} BNB</p>
        </td>
        <p className="reflink">
          View on BSC Scan <img className="send" src={send} />
        </p>
      </tr>
    </>
  );
};
