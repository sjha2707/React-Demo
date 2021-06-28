import React, { Component } from 'react';
import { render } from 'react-dom';
import Pagination from 'react-paginate';


// const fruits = [
//     ["apple", "orange", "apple"],
//     ["banana", "avocado"],
//     ["coconut", "blueberry"],
//     ["payaya", "peach"],
//     ["pear", "plum"]
// ];
// const limit = 2;
// const pageCount = 3;
// const total = fruits.length * limit;
class Data extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            limit: 2,
            pageCount: 3,
            total: 0,
            list: [
                { name: ' Sairam 1', phone: '10000000', email: 'sai123@gmail.com' },
                { name: ' Sairam 2', phone: '11111111', email: 'sai234@gmail.com' },
                { name: ' Sairam 3', phone: '22222222', email: 'sai345@gmail.com' },
                { name: ' Sairam 4', phone: '33333333', email: 'sai3456@gmail.com' }
            ],
            fruits: [
                ["apple", "orange", "apple"],
                ["banana", "avocado"],
                ["coconut", "blueberry"],
                ["payaya", "peach"],
                ["pear", "plum"]
            ]

        }

    }
    render() {
        const { currentPage } = this.state.currentPage;
        const total = this.state.fruits.length * this.state.limit;
        const limit = this.state.limit;
        const pageCount = this.state.pageCount;
        let fruits;

        if (this.state.fruits !== null) {
            fruits = this.state.fruits.map(item => (
                item
            ));
        }

        return (
            <div>
                <h1>
                    Listing with MAP
                </h1>
                {/* {
                    this.state.fruits.map((item) =>
                        <div>
                           {item}
                        </div>
                    )
                } */}

                {<ul>
                    {fruits.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>}


                <Pagination
                    total={total}
                    limit={limit}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    className="bg-red"
                >
                    {({
                        pages,
                        currentPage,
                        hasNextPage,
                        hasPreviousPage,
                        previousPage,
                        nextPage,
                        totalPages,
                        getPageItemProps
                    }) => (
                        <div>
                            <button
                                {...getPageItemProps({
                                    pageValue: 1,
                                    onPageChange: this.handlePageChange
                                })}
                            >
                                first
              </button>

                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {"<"}
                                </button>
                            )}

                            {pages.map((page) => {
                                let activePage = null;
                                if (currentPage === page) {
                                    activePage = { backgroundColor: "#fdce09" };
                                }
                                return (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: page,
                                            key: page,
                                            style: activePage,
                                            onPageChange: this.handlePageChange
                                        })}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {hasNextPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: nextPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {">"}
                                </button>
                            )}

                            <button
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: this.handlePageChange
                                })}
                            >
                                last
              </button>
                        </div>
                    )}
                </Pagination>

            </div>
        );
    }
}

export default Data;