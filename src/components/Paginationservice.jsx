import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import Ai  from './Servicecomponent/Ai.jsx';
import Webapp  from './Servicecomponent/Webapp.jsx'
import Iot  from './Servicecomponent/Iot.jsx'
import Mobbileapp from './Servicecomponent/Mobbileapp.jsx';
import { } from "../components/css/App.css";

const Paginationservice = (page) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageLabels = ['Ai', 'Website', 'Iot', 'Supply Chain Management']; // Tổng số trang
  
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Nội dung cho từng trang
  const renderPageContent = (pageIndex) => {
    switch (pageIndex) {
      case 0:
        return <div><Ai/></div>;
      case 1:
        return <div><Webapp/></div>;
      case 2:
        return <div><Iot /></div>;
      case 3:
          return <div><Mobbileapp/></div>;
    }
  };

  return (
    <div className="App">
      <div className='w-screen bg-emerald-100 pt-2 flex justify-center'>
        <ReactPaginate 
          breakLabel={"..."}
          previousLabel={null}
          nextLabel={null}
        breakClassName={"break-me"}
        pageCount={pageLabels.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex space-x-20 my-6 font-xl font-bold uppercase"}
        subContainerClassName={"pages pagination"}
        activeClassName={"text-white"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        renderOnZeroPageCount={null}
        pageLabelBuilder={(page) => pageLabels[page - 1]} 
        />
      </div>
       {renderPageContent(currentPage)}
    </div>
  );
}

export default Paginationservice

