import React, { useEffect, useState } from "react";
import { NextIcon, PrevIcon } from "../icons";
import arrow from '../../assets/images/Vector.svg';

type PaginateType = {
  currentPage: number;
  numberOfPages: number;
  next: () => void;
  previous: () => void;
  setPage: (num: number) => void;
};

const Pagination = ({
  currentPage,
  numberOfPages,
  next,
  previous,
  setPage,
}: PaginateType) => {
  const [numbring, setNumbring] = useState<number[] | []>([]);

  useEffect(() => {
    const num = [];
    for (let i: number = 0; i < numberOfPages; i++) {
      num.push(i + 1);
    }
    setNumbring([...num]);
  }, [numberOfPages]);

  return (
    <div className="pagination">
      <div className="total">
        <span>Showing</span>
        <span className="control">{currentPage}
          <span className="arrow"><img src={arrow}/></span>
          </span>
        <span>out of {numberOfPages}</span>
      </div>

      <div className="numbring">
        <button type="button" onClick={previous}>
          <PrevIcon />
        </button>

        {/*{numbring.map((num, idx) => (*/}
        {/*  <span onClick={() => setPage(num)}>{num}</span>*/}
        {/*))}*/}
        {numbring.map((num) => (
            <span
                key={num}
                onClick={() =>setPage(num)}
                style={{ color: num === currentPage ? "#545F7D" : "#545F7D99" }}
            >
          {num}
  </span>
        ))}

        <button type="button" onClick={next}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
