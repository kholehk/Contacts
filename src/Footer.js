import React from 'react';

function Footer(props) {
  const { container, currentPage } = props;

  return (
    <footer className={container}>
      <nav aria-label="Pagination of users list">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href={`./?page=${currentPage - 1}`}
              tabIndex="-1"
              aria-disabled="true"
            >Previous</a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href={`./?page=${currentPage + 1}`}
            >Next</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
