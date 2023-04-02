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
    const [numbring, setNumbring] = useState<number[]>([]);

    useEffect(() => {
        const num = [];
        for (let i: number = 0; i < numberOfPages; i++) {
            num.push(i + 1);
        }
        setNumbring([...num]);
    }, [numberOfPages]);

    let displayNums: (number | string)[] = [];

    if (numbring.length <= 5) {
        displayNums = numbring;
    } else if (currentPage <= 3) {
        displayNums = [1, 2, 3, '...', numbring[numbring.length - 1]];
    } else if (currentPage >= numbring.length - 2) {
        displayNums = [    1,    '...',    numbring[numbring.length - 3],
            numbring[numbring.length - 2],
            numbring[numbring.length - 1],
        ];
    } else {
        displayNums = [    1,    '...',    numbring[currentPage - 1],
            numbring[currentPage],
            numbring[currentPage + 1],
            '...',
            numbring[numbring.length - 1],
        ];
    }

    return (
        <div className="pagination">
            <div className="total">
                <span>Showing</span>
                <span className="control">
          {currentPage}
                    <span className="arrow">
            <img src={arrow} />
          </span>
        </span>
                <span>out of {numberOfPages}</span>
            </div>

            <div className="numbring">
                <button type="button" onClick={previous}>
                    <PrevIcon />
                </button>
                {displayNums.map((num, idx) => {
                    return (
                        <span
                            key={idx}
                            onClick={() => setPage(num as number)}
                            style={{
                                color:
                                    num === currentPage ? "#545F7D" : "#545F7D99",
                            }}
                        >
              {num}
            </span>
                    );
                })}
                <button type="button" onClick={next}>
                    <NextIcon />
                </button>
            </div>
        </div>
    );
};


export default Pagination;
