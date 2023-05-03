import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onChangePage }) =>  (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
    />
  );

export default Pagination;