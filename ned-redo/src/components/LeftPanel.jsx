import {useState, useContext} from 'react'; 


import {Context} from '../context'
// import FundUse from './FundUse'
import AnnualRevenue from './AnnualRevenue';
// import DesiredLoan from './DesiredLoan';
import DesiredLoanSlider from './DesiredLoanSlider';
// import RevenueFrequency from './RevenueFrequency';
import DesiredDelay from './DesiredDelay';
// import RevenueShare from './RevenueShare';
// import FundUse from './FundUse';

import '../styling/LeftPanel.styles.css';


const LeftPanel = () => {
    const {revenueAmount,
            fundingMax, 
            fundingMin,
            fee, 
            desiredRepayment, 
            fundingAmount, 
            revPercentage, 
            revFreq, 
            useOfFunds, 
            revMin, 
            revMax} = useContext(Context); 
    
    const onSearchChange = (event) => {
        const setRev = event.target.value.replace(/\D/,'');
        setRevenueField(setRev);
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    return(
         <div className='leftPanel-parent'> 
                <div className='leftPanel-header'>
                    <p className='Finance-Options'> Financing options </p>
                </div>
                    <AnnualRevenue onSearchChange={onSearchChange} revenueField={!revenueAmount ? revenueField : revenueAmount} placeholder='$ 250,000'/>
                    <DesiredLoanSlider fundingMin={fundingMin} fundingMax={fundingMax}/>
                    {/* <RevenueFrequency/> */}
                    <DesiredDelay value={value} onClick={handleChange}/>
                    {/* <RevenueShare/> */}
                    {/* <FundUse/> */}
              
        </div>
    )
}

export default LeftPanel; 