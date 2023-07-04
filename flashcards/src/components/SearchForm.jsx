import React from "react";
import Button from "./Button";

function SearchForm() {
    
    return (
        <div className="search-form">
            <input type="text" className="search-form__search-field" placeholder="search" />
            <Button>search</Button>
        </div>
    )
}

export default SearchForm;