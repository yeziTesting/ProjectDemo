/**
 * SelectInput.js
 * created 2017.08.08
 * written by LeeHyungGeun
 * 
 * select element
 */

import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ id, name, value, defaultOption, options, onChange, readonly, disabled }) => {
    return (
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readonly}
            disabled={disabled}
        >
         {
            (
                defaultOption ? 
                <option 
                    value={defaultOption.value}>
                        {defaultOption.text}
                </option> :
                null
            )
        } 
        {
            options.filter(option => defaultOption.value !== option.value).map((option) => {
                return (
                    <option 
                        key={option.value}
                        value={option.value}
                    >
                            {option.text}
                    </option>
                );
            })
        }
        </select>
    );
};
SelectInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    defaultOption: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func.isRequired,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool
};
export default SelectInput;