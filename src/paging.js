import React from 'react'
export default class paging extends React.Component {
    render() {
        return (
            <Pagination
                hideNavigation
                pageRangeDisplayed={10}
                activePage={this.state.activePage}
                itemsCountPerPage={PER_PAGE}
                totalItemsCount={TOTAL_COUNT}
                onChange={this.handlePageChange}
            />
        );
    }
}