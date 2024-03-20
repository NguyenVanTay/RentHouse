/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PageNumber } from "../../components";
import { Icon } from "@iconify/react";
const Pagination = ({ page }) => {
  const { count, posts } = useSelector((state) => state.post);

  const [arrPage, setArrPage] = useState([]);
  const [currentPage, setCurentPage] = useState(+page || 1);
  const [isHiddenEnd, setIsHiddenEnd] = useState(false);
  const [isHiddenStart, setIsHiddenStart] = useState(false);

  useEffect(() => {
    let maxPage = Math.floor(count / posts.length);
    let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1;
    let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    let temp = [];
    for (let i = start; i <= end; i++) {
      temp.push(i);
    }
    setArrPage(temp);
    currentPage >= maxPage - 1 ? setIsHiddenEnd(true) : setIsHiddenEnd(false);

    currentPage <= 2 ? setIsHiddenStart(true) : setIsHiddenStart(false);
  }, [count, posts, currentPage]);

  return (
    <div className="flex justify-center gap-2 py-5">
      {!isHiddenStart && (
        <PageNumber
          icon={<Icon icon={"fluent:previous-20-regular"}></Icon>}
          text={1}
          setCurentPage={setCurentPage}
        />
      )}
      {!isHiddenStart && <PageNumber text={"..."} />}

      {arrPage.length > 0 &&
        arrPage.map((item, index) => {
          return (
            <PageNumber
              key={index}
              text={item}
              currentPage={currentPage}
              setCurentPage={setCurentPage}
            ></PageNumber>
          );
        })}
      {!isHiddenEnd && <PageNumber text={"..."} />}
      {!isHiddenEnd && (
        <PageNumber
          setCurentPage={setCurentPage}
          icon={<Icon icon={"fluent:next-20-regular"}></Icon>}
          text={Math.floor(count / posts.length)}
        />
      )}
    </div>
  );
};

export default Pagination;
