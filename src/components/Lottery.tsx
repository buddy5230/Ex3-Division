import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Lottery.css";
import CheckNumber from "./CheckNumber";
//ฟังก์ชั่นสุ่มเลขรางวัล
const Lottery = () => {
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<string[]>([]);

  useEffect(() => {
    const storedNumbers = sessionStorage.getItem("numbers");
    if (storedNumbers) {
      setNumbers(JSON.parse(storedNumbers));
      console.log(JSON.parse(storedNumbers));
    }
  }, []);

  const RandomNumber3 = () => {
    let randomNumber = "";
    for (let i = 0; i < 3; i++) {
      const digit = Math.floor(Math.random() * 10);
      randomNumber += digit.toString();
    }
    return randomNumber;
  };

  const RandomNumber2 = () => {
    let randomNumber = "";
    for (let i = 0; i < 2; i++) {
      const digit = Math.floor(Math.random() * 10);
      randomNumber += digit.toString();
    }
    return randomNumber;
  };

  const hanldeClick = () => {
    setShowNumber(false);

    setTimeout(() => {
      setShowNumber(true);
      const newNumbers = [
        RandomNumber3(),
        RandomNumber3(),
        RandomNumber3(),
        RandomNumber3(),
        RandomNumber3(),
        RandomNumber3(),
        RandomNumber2(),
      ];
      setNumbers(newNumbers);
      sessionStorage.setItem("numbers", JSON.stringify(newNumbers));
    }, 500);
  };

  // console.log(Random())
  return (
    <div className="display-flex" >
        
      <div className="m-5" style={{ width: "500px" }}>
        <button
          type="button"
          className="btn btn-secondary mb-2"
          onClick={hanldeClick}
        >
          ดำเนินการสุ่มรางวัล
        </button>
        {showNumber || numbers.length !== 0 ? null : (
          <span className="ps-3 text-danger fs-5">กรุณากดปุ่มดำเนินการสุ่มรางวัลก่อน!</span>
        )}
        <div className="row text-center">
          <div className="col-6 border border-secondary p-2 bg-black text-white">
            รางวัลที่ 1
          </div>
          <div className="col-6 border border-secondary p-2">
            {showNumber || numbers.length !== 0 ? numbers[0] : null}
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6 border border-secondary p-2 bg-black text-white black text-white">
            รางวัลเลขข้างเคียงรางวัลที่ 1
          </div>
          <div className="col-3 border border-secondary p-2">
            {showNumber || numbers.length !== 0 ? numbers[1] : null}
          </div>
          <div className="col-3 border border-secondary p-2">
            {showNumber || numbers.length !== 0 ? numbers[2] : null}
          </div>
        </div>
        <div className="row text-center">
          <div className="col-3 border border-secondary p-2 bg-black text-white">
            รางวัลที่ 2
          </div>
          <div className="col-3 border border-secondary p-2">
            {showNumber || numbers.length !== 0 ? numbers[3] : null}
          </div>
          <div className="col-3 border border-secondary p-2">
            {showNumber || numbers.length !== 0 ? numbers[4] : null}
          </div>
          <div className="col-3 border border-secondary p-2">
            {showNumber || numbers.length !== 0 ? numbers[5] : null}
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6 border border-secondary p-2 bg-black text-white">
            รางวัลเลขท้าย 2 ตัว
          </div>
          <div className="col-6 border border-secondary p-2">
            {showNumber || numbers.length !== 0 ? numbers[6] : null}
          </div>
        </div>
      </div>
      <div className="m-5">
        <CheckNumber numbers={numbers} />
      </div>
    </div>
  );
};

export default Lottery;
