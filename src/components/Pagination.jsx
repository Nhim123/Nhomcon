import React, { useEffect, useState }  from 'react'
import ReactPaginate from 'react-paginate';
import Pagination1 from "./Aboutcomponent/Pagination1";
import Pagination2 from './Aboutcomponent/Pagination2';
import Pagination3 from './Aboutcomponent/Pagination3';
import {  } from "../components/css/App.css";

const Pagination = (page) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageLabels = ['Home' , 'Store', 'Kitchen']; // Tổng số trang

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Nội dung cho từng trang
  const renderPageContent = (pageIndex) => {
    switch (pageIndex) {
      case 0:
        return <div><Pagination1/></div>;
      case 1:
        return <div><Pagination2/></div>;
      case 2:
        return <div><Pagination3/></div>;
    }
  };

  return (
    <div className="App">
      <ReactPaginate 
        previousLabel={null}
        nextLabel={null}
       breakLabel={"..."}
       breakClassName={"break-me"}
       pageCount={pageLabels.length}
       marginPagesDisplayed={2}
       pageRangeDisplayed={3}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       subContainerClassName={"pages pagination"}
       activeClassName={"active"}
       pageClassName={"page-item"}
       pageLinkClassName={"page-link"}
       renderOnZeroPageCount={null}
       pageLabelBuilder={(page) => pageLabels[page - 1]} 
      />
       {renderPageContent(currentPage)}
    </div>
  );
}

export default Pagination