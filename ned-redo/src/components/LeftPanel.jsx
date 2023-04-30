import {useState} from 'react'; 

// import FundUse from './FundUse'
import AnnualRevenue from './AnnualRevenue';
// import DesiredLoan from './DesiredLoan';
// import DesiredLoanSlider from './DesiredLoanSlider';
// import RevenueFrequency from './RevenueFrequency';
// import DesiredDelay from './DesiredDelay';
// import RevenueShare from './RevenueShare';
// import FundUse from './FundUse';

import '../styling/LeftPanel.styles.css';


const LeftPanel = ({revenueAmount, fundingMax, findingMin, fee, desiredRepayment, fundingAmount, revPercentage, revFreq, useOfFunds, revMin, revMax}) => {
    const [revenueField, setRevenueField] = useState(''); 

    
    const onSearchChange = (event) => {
        const setRev = event.target.value.replace(/\D/,'');
        setRevenueField(setRev);
    }

    return(
         <div className='leftPanel-parent'> 
                <div className='leftPanel-header'>
                    <p className='Finance-Options'> Financing options </p>
                </div>
                    <AnnualRevenue onSearchChange={onSearchChange} revenueField={!revenueAmount ? revenueField : revenueAmount} placeholder='$ 250,000'/>
                    {/* <DesiredLoan/>
                    <DesiredLoanSlider/>
                    <RevenueFrequency/>
                    <DesiredDelay/>
                    <RevenueShare/> */}
                    {/* <FundUse/> */}
              
        </div>
    )
}

export default LeftPanel; 