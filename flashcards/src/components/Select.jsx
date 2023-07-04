import React from "react";

function Select({options, defaultValue, value, onChange}) {
    return (
        <select
            className="select" 
            value={value}
            onChange={e => onChange(e.target.value)}
            >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option value={option} key={option}>
                        {option}
                    </option>)}

        </select>
    )
}

export default Select;