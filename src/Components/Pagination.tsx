import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Fragment>
      <section className="mt-5">
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center align-items-center"
        >
          <ul className="pagination d-flex flex-wrap">
            {pageNumbers.map((number) => (
              <li className="page-item" key={number}>
                <Link
                  onClick={() => paginate(number)}
                  to={`${number}`}
                  className="page-link shadow-none"
                >
                  {number}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </Fragment>
  );
};

export default Pagination;
