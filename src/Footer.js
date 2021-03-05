import React, { useEffect, useState } from 'react';

function Footer(props) {
  const { container, firstPage, lastPage, currentPage, setCurrentPage } = props;
  const [prev, setPrev] = useState(firstPage);
  const [next, setNext] = useState(lastPage);

  useEffect(
    () => {
      setPrev((currentPage - 1) || firstPage);
      setNext((currentPage + 1));
    },
    [currentPage, firstPage]
  );

  console.log(prev, next);

  return (
    <footer className={container}>
      <nav aria-label="Pagination of users list">
        <ul className="pagination justify-content-center">
          {currentPage === prev ||
            (< li className="page-item">
              <a
                className="page-link"
                href={`./?page=${prev}`}
                onClick={(event) => { event.preventDefault(); setCurrentPage(prev); }}
              >Previous</a>
            </li>)
          }
          {currentPage === next ||
            <li className="page-item">
              <a
                className="page-link"
                href={`./?page=${next}`}
                onClick={(event) => { event.preventDefault(); setCurrentPage(next); }}
              >Next</a>
            </li>
          }
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
