import React from "react"
import classes from "./Pagination.module.css"



const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    // create array of numbers from number of n pages
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    // next page click handler
    const nextPage = (event) => {
        event.preventDefault()
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }

    //previous page click handler
    const prevPage = (event) => {
        event.preventDefault()
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    return <nav>
        <ul className="pagination justify-content-center">
            <li className="page-item mb-5">
                <a className="page-link"
                    href="/"
                    onClick={prevPage}
                >
                    Previos
                </a>
            </li>
            {pageNumbers.map((pgNum) => {
                return <li key={pgNum}
                    className={`${classes.pgNum} page_link`}
                    href="#">
                    {pgNum}
                </li>
            })}
            <li className="page-item">
                <a className="page-link"
                    onClick={nextPage}
                    href="/">
                    Next
                </a>
            </li>
        </ul>
    </nav>
}




export default Pagination