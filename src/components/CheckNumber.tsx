import React, { useEffect, useState } from "react";
import Reward from "./Reward";

type CheckNumberProps = {
  numbers: string[];
};

const CheckNumber: React.FC<CheckNumberProps> = ({ numbers }) => {
  //รับค่าตัวเลขรางวัลเพื่อมาหาว่าตัวเลขที่ใส่มีตัวเลขไหนได้รางวัลบ้าง
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const [reward1, setReward1] = useState<number>(1);
  const [reward2, setReward2] = useState<number>(2);
  const [reward3, setReward3] = useState<number>(3);
  const [reward4, setReward4] = useState<number>(1);
  const [twonumber, setTwonumber] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue === "") {
      //กรณีไม่ใส่อะไรในช่องเเล้วกดปุ่ม
      setResult([]);
      return;
    }

    const inputNumbers = inputValue.split(",").map((num) => num.trim());
    if (inputNumbers.length > 1000) {
      //กรณีใส่จำนวนเกิน 1000
      setResult(["จำนวนใบเกิน 1000 ใบ "]);
      return;
    }

    for (let i of inputNumbers) {
      if (isNaN(Number(i)) === true || i.length !== 3) {
        //กรณีใส่ตัวเลขไม่ครบ3ตัว เเละใส่เป็นสตริงอื่นที่ไม่ใช่ตัวเลข
        setResult(["กรุณาใส่ตัวเลข 3 ตัวเท่านั้น "]);
        return;
      }
    }

    let ms: string[] = []; //เก็บข้อความเเสดงผล
    const clone: string[] = inputNumbers;
    let replace = 0;
    let twoend = "";
    for (let j = 0; j < clone.length; j++) {
      //หาว่าเลขที่ใส่มามีเลขไหนได้เลข2หลัก
      if (clone[j].slice(1) === numbers[6]) {
        replace = j;
        twoend = clone[j];
        break;
      }
    }
    console.log(clone);
    console.log(numbers[0] !== twoend);

    if (inputNumbers.includes(numbers[0]) && numbers[0] !== twoend) {
      ms.push(`${numbers[0]} ถูกรางวัลที่ 1 `);
      setReward1(reward1 - 1);
    } else if (inputNumbers.includes(numbers[0]) && numbers[0] === twoend) {
      ms.push(`${numbers[0]} ถูกรางวัลที่ 1 เเละถูกรางวัลเลขท้าย 2 ตัว`);
      setReward1(reward1 - 1);
      setReward4(reward4 - 1);
    }

    let count0 = 0;
    let count1 = 0;
    if (inputNumbers.includes(numbers[1]) && numbers[1] !== twoend) {
      ms.push(`${numbers[1]} ถูกรางวัลเลขข้างเคียงรางวัลที่ 1`);
      count0 += 1;
    } else if (inputNumbers.includes(numbers[1]) && numbers[1] === twoend) {
      ms.push(
        `${numbers[1]} ถูกรางวัลเลขข้างเคียงรางวัลที่ 1 เเละถูกรางวัลเลขท้าย 2 ตัว`
      );
      count1 += 1;
    }

    if (inputNumbers.includes(numbers[2]) && numbers[2] !== twoend) {
      ms.push(`${numbers[2]} ถูกรางวัลเลขข้างเคียงรางวัลที่ 1`);
      count0 += 1;
    } else if (inputNumbers.includes(numbers[2]) && numbers[2] === twoend) {
      ms.push(
        `${numbers[2]} ถูกรางวัลเลขข้างเคียงรางวัลที่ 1 เเละถูกรางวัลเลขท้าย 2 ตัว`
      );
      count1 += 1;
    }
    console.log(count1);
    if (count0 > 0 && count0 <= 2) {
      setReward2(reward2 - count0);
    } else if (count1 > 0 && count1 <= 2) {
      setReward2(reward2 - count1);
      setReward4(reward4 - count1);
    }

    let count2 = 0;
    let count3 = 0;
    if (inputNumbers.includes(numbers[3]) && numbers[3] !== twoend) {
      ms.push(`${numbers[3]} ถูกรางวัลที่ 2 `);
      count2 += 1;
    } else if (inputNumbers.includes(numbers[3]) && numbers[3] === twoend) {
      ms.push(`${numbers[3]} ถูกรางวัลที่ 2 เเละถูกรางวัลเลขท้าย 2 ตัว`);
      count3 += 1;
    }

    if (inputNumbers.includes(numbers[4]) && numbers[4] !== twoend) {
      ms.push(`${numbers[4]} ถูกรางวัลที่ 2 `);
      count2 += 1;
    } else if (inputNumbers.includes(numbers[4]) && numbers[4] === twoend) {
      ms.push(`${numbers[4]} ถูกรางวัลที่ 2 เเละถูกรางวัลเลขท้าย 2 ตัว`);
      count3 += 1;
    }

    if (inputNumbers.includes(numbers[5]) && numbers[5] !== twoend) {
      ms.push(`${numbers[5]} ถูกรางวัลที่ 2 `);
      count2 += 1;
    } else if (inputNumbers.includes(numbers[5]) && numbers[5] === twoend) {
      ms.push(`${numbers[5]} ถูกรางวัลที่ 2 เเละถูกรางวัลเลขท้าย 2 ตัว`);
      count3 += 1;
    }
    if (count2 > 0 && count2 <= 3) {
      setReward3(reward3 - count2);
    } else if (count3 > 0 && count3 <= 3) {
      setReward2(reward3 - count3);
      setReward2(reward4 - count3);
    }
    //console.log(twoend.slice(1) ===numbers[6]);
    if (twoend.slice(1) === numbers[6]) {
      if (
        !twoend.includes(numbers[0]) &&
        !twoend.includes(numbers[1]) &&
        !twoend.includes(numbers[2]) &&
        !twoend.includes(numbers[3]) &&
        !twoend.includes(numbers[4]) &&
        !twoend.includes(numbers[5]) &&
        reward4 !== 0
      ) {
        setTwonumber(twoend)
        ms.push(`${twoend} ถูกรางวัลเลขท้าย 2 ตัว`);
        setReward4(reward4 - 1);
      }
      if (twonumber === twoend &&
        reward4 === 0
      ) {
        ms.push(`${twoend} ถูกรางวัลเลขท้าย 2 ตัว`);
      }
    }
    console.log(reward4)
    for (let z of inputNumbers){
      console.log("reward4",reward4)
      if (
        !z.includes(numbers[0]) &&
        !z.includes(numbers[1]) &&
        !z.includes(numbers[2]) &&
        !z.includes(numbers[3]) &&
        !z.includes(numbers[4]) &&
        !z.includes(numbers[5])&&
        z!==twoend
      ) {
        ms.push(`${z} ไม่ถูกรางวัลอะไรเลย`);
      }
      
    }
    
    if (reward1 === 0) {
      ms.push("");
    }
    if (reward2 === 0) {
      ms.push("");
    }
    if (reward3 === 0) {
      ms.push("");
    }

    setResult(ms);
  };

  return (
    <>
      <Reward num1={reward1} num2={reward2} num3={reward3} num4={reward4} />
      <div className="border border-secondary" style={{ width: "420px" }}>
        <div
          className="bg-info ps-3 pt-3 text-white"
          style={{ height: "70px" }}
        >
          <h3>ตรวจรางวัลล็อตเตอรี่</h3>
        </div>
        <div className="m-3 mt-4">
          <form onSubmit={handleSubmit}>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              เลขล็อตเตอรี่ :{" "}
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="กรุณาใส่ , คั่นหมายเลข ถ้ามีมากกว่า 1 ใบ"
                style={{ width: "380px" }}
              />
            </span>
            <br></br>
            <button type="submit" className="btn btn-primary mt-2 ">
              ตรวจรางวัล
            </button>
          </form>
          <div className="pt-3 bg-warning mt-3 pb-2 ps-2">
            <h5>
              {result.map((num) => (
                <div key={num}>{num}</div>
              ))}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckNumber;
//{result.map((num)=><div key={num}>{num}</div>)}
