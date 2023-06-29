import React from "react";
import "./Reward.css";
type RewordProps ={
  num1: number;
  num2: number;
  num3: number;
  num4: number;
}
//รับค่าจากตัวเลขที่ใส้ไป เพื่อนำมาเเสดงผลจำนวนคงเหลือของรางวัล
const Reward: React.FC<RewordProps> = ({ num1, num2, num3, num4 }) => {
  return (
    <div
      className="set-reward"
      style={{ bottom: "550px", left: "150px" }}
    >
      <span style={{ paddingRight: "50px" }}>
        <h5>
          {num1 <= 0 ? (
            <p>รางวัลที่ 1 หมดแล้ว</p>
          ) : (
            <p>รางวัลที่ 1 คงเหลือ {num1} รางวัล</p>
          )}
        </h5>
      </span>
      <span style={{ paddingRight: "50px" }}>
      <h5>
          {num3 <= 0 ? (
            <p>รางวัลที่ 2 หมดแล้ว</p>
          ) : (
            <p>รางวัลที่ 2 คงเหลือ {num3} รางวัล</p>
          )}
        </h5>
      </span>
      <span style={{ paddingRight: "50px" }}>
      <h5>
          {num2 <= 0 ? (
            <p>รางวัลเลขข้างเคียงรางวัลที่ 1 หมดเเล้ว</p>
          ) : (
            <p>รางวัลเลขข้างเคียงรางวัลที่ 1 คงเหลือ {num2} รางวัล</p>
          )}
        </h5>
      </span>
      <span style={{ paddingRight: "50px" }}>
      <h5>
          {num4 <= 0 ? (
            <p>รางวัลเลขท้าย 2 ตัว หมดแล้ว</p>
          ) : (
            <p>รางวัลเลขท้าย 2 ตัว คงเหลือ {num4} รางวัล</p>
          )}
        </h5>
      </span>
    </div>
  );
};

export default Reward;

