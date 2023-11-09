import React from "react";
// import Button from "./Button";

function SearchForm({filter, setFilter}) {
    
    return (
        <div className="search-form">
            <input 
                type="text" 
                className="search-form__search-field" 
                placeholder="search" 
                value={filter}
                onChange={e => setFilter(...filter, e.target.value)}
            />
            {/* <Button onClick={e => setFilter(...filter, e.target.value)}>search</Button> */}
        </div>
    )
}

export default SearchForm;