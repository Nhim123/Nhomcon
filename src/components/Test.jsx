import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';


const Test = () => {
    const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 3; // Tổng số trang

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Nội dung cho từng trang
  const renderPageContent = (pageIndex) => {
    switch (pageIndex) {
      case 0:
        return <div>Trang 1: Nội dung trang 1</div>;
      case 1:
        return <div>Trang 2: Nội dung trang 2</div>;
      case 2:
        return <div>Trang 3: Nội dung trang 3</div>;
    }
  };

  return (
    <div className="App">
      {renderPageContent(currentPage)}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Test