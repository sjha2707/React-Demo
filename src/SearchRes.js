import React, { Component } from 'react';

class SearchRes extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData: null,
            searchQuery: ''
        }
    }
    search(key) {
        //console.warn("Key :" + key)
        let pageNumber = 1;
        fetch("http://localhost:3001/api/search?p=" + key)
            .then((data) => {
                data.json()
                    .then((result) => {
                        console.warn("result :" + result.data)
                        if (result.data.length > 0) {
                            this.setState({
                                searchData: result.data,
                                noData: false
                            });
                        }
                        else {
                            this.setState({
                                noData: true, searchData: null
                            });
                        }
                    })
            })
            .catch(error => this.setState({ noData: true, searchData: false }));
    }
    render() {
        return (
            <div>
                <h1> Search Res.</h1>
                <input type="text" onChange={(event) => this.search(event.target.value)} />
                {
                    this.state.searchData ?

                        this.state.searchData.map((item) =>
                            <div> {item.Title}</div>
                        )
                        : ""
                }
                {
                    this.state.noData ? <h3>No data found </h3> : ""
                }
            </div>
        );
    }
}
export default SearchRes;