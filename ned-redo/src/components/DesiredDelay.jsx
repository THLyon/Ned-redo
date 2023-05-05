import * as React from 'react'; 
import '../styling/DesiredDelay.styles.css'
const DesiredDelay = ({value, handleChange}) => {

    const options = [
   { label: '30 days', value: '30 days' },
   { label: '60 days', value: '60 days' },
   { label: '90 days', value: '90 days' },

 ];
 
    return (
        <div className='desired-delay-div'>
            <p className='desired-title'> Desired Repayment Delay </p>
            <select className='selector' value={value} onChange={handleChange}>
                {options.map((option) => (
                    <option value={option.value}> {option.label} </option>
                ))}
            </select>
        </div>
    )
}; 

export default DesiredDelay; 