import React, { useEffect, useState } from 'react';

function Footer(props) {
  const { container, firstPage, lastPage, currentPage, setCurrentPage } = props;
  const [prevPage, setPrevPage] = useState(firstPage);
  const [nextPage, setNextPage] = useState(lastPage);

  useEffect(
    () => {
      setPrevPage(currentPage - 1);
      setNextPage(currentPage + 1);
    },
    [currentPage]
  );

  return (
    <footer className={container}>
      <nav aria-label="Pagination">
        <ul className="pagination justify-content-center">
          <NavButton title={"Previous"} condition={currentPage === firstPage}
            page={prevPage} setCurrentPage={setCurrentPage} />
          <NavButton title={"Next"} condition={currentPage === lastPage}
            page={nextPage} setCurrentPage={setCurrentPage} />
        </ul>
      </nav>
    </footer>
  )
}

function NavButton(props) {
  const { title, condition, page, setCurrentPage } = props;

  return (
    <li className={"page-item" + (condition ? " disabled" : "")}>
      <a
        className="page-link"
        href={`./?page=${condition ? "" : page}`}
        tabIndex={condition ? "-1" : ""}
        aria-disabled={condition}
        onClick={(event) => { event.preventDefault(); setCurrentPage(page); }}
      >{title}</a>
    </li>
  )
}

export default Footer;
