import React from "react";

function Select({options, defaultValue, value, onChange}) {
    return (
        <select
            className="select" 
            value={value}
            onChange={e => onChange(e.target.value)}
            >
            <option value="">{defaultValue}</option>
            {options.map(option => 
                <option value={option.value} key={option.value}>
                        {option.name}
                    </option>)}

        </select>
    )
}  

export default Select;