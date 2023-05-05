import React, {useEffect, useState, useContext} from 'react';
import Header from './components/Header'; 
import LeftPanel from './components/LeftPanel'; 
import RightPanel from './components/RightPanel'; 
// import DesktopButtons from './components/DesktopButtons';

import './App.css';

const App = () => {
  // const [loanData, setLoanData] = useState([]);
  // const [revenueAmount, setRevenueAmount] = useState([]);
  // const [fundingMax, setFundingMax] = useState([]); 
  // const [fundingMin, setFundingMin] = useState([]); 
  // const [fee, setFee] = useState([]); 
  // const [desiredRepayment, setDesiredRepayment] = useState([]); 
  // const [fundingAmount, setFundingAmount] = useState([]);
  // const [revPercentage, setRevPercentage] = useState([]);
  // const [revFreq, setRevFreq] = useState([]);
  // const [useOfFunds, setUseOfFunds] = useState([]);
  // const [revMin, setRevMin] = useState([]); 
  // const [revMax, setRevMax] = useState([]);  
  // const [bool, setBool] = useState(false); 

  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json')
  //     .then(data => data.json())
  //     .then(data => setLoanData(data))
  // }, []);

  // console.log(loanData)
  // useEffect((loanData, bool) => {
  //   if(bool === false){
  //   for(let i = 0; i < loanData.length; i++){
  //     if(loanData[i].name === 'revenue_amount'){
  //       setRevenueAmount( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'funding_amount_max'){
  //       setFundingMax( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'funding_amount_min'){
  //       setFundingMin( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'desired_fee_percentage'){
  //       setFee( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'desired_repayment_delay'){
  //       setDesiredRepayment( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'funding_amount'){
  //       setFundingAmount( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'revenue_percentage'){
  //       setRevPercentage( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'revenue_shared_frequency'){
  //       setRevFreq( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'use_of_funds'){
  //       setUseOfFunds( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'revenue_percentage_min'){
  //       setRevMin( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //     else if(loanData[i].name === 'revenue_percentage_max'){
  //       setRevMax( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
  //     }
  //   }
  // }
  // setBool(true); 
    
  // }, [loanData])



  return (
    <div className="App">
       <Header />
      {/* <LeftPanel revenueAmount={revenueAmount} fundingMax={fundingMax} findingMin={fundingMin} fee={fee} desiredRepayment={desiredRepayment} fundingAmount={fundingAmount} revPercentage={revPercentage} revFreq={revFreq} useOfFunds={useOfFunds} revMin={revMin} revMax={revMax}/> */}
      {/* <RightPanel revenueAmount={revenueAmount} fundingMax={fundingMax} findingMin={fundingMin} fee={fee} desiredRepayment={desiredRepayment} fundingAmount={fundingAmount} revPercentage={revPercentage} revFreq={revFreq} useOfFunds={useOfFunds} revMin={revMin} revMax={revMax}/> */}
      <LeftPanel />
      <RightPanel />
      {/* <DesktopButtons/> */}
    </div>
  );
}

export default App;
