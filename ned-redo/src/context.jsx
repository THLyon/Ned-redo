import { createContext, useState, useEffect } from 'react';

export const Context = createContext({
    loanData:  [],
    revenueAmount: 0,  
    fundingMax: 0, 
    fundingMin: 0,
    fee: 0, 
    desiredRepayment: '', 
    fundingAmount: 0, 
    revPercentage: 0, 
    revFreq: '', 
    useOfFunds: '',
    revMin: 0,
    revMax: 0
})


export const ContextProvider = ({children}) => {

    const [loanData, setLoanData] = useState([]);
    const [revenueAmount, setRevenueAmount] = useState(0);
    const [fundingMax, setFundingMax] = useState(0); 
    const [fundingMin, setFundingMin] = useState(0); 
    const [fee, setFee] = useState(0); 
    const [desiredRepayment, setDesiredRepayment] = useState(''); 
    const [fundingAmount, setFundingAmount] = useState(0);
    const [revPercentage, setRevPercentage] = useState(0);
    const [revFreq, setRevFreq] = useState('');
    const [useOfFunds, setUseOfFunds] = useState('');
    const [revMin, setRevMin] = useState(0); 
    const [revMax, setRevMax] = useState(0);  
    const [bool, setBool] = useState(false); 
  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json')
        .then(data => data.json())
        .then(data => setLoanData(data))
    }, []);
  
    console.log(loanData)
    useEffect((loanData, bool) => {
      if(bool === false){
      for(let i = 0; i < loanData.length; i++){
        if(loanData[i].name === 'revenue_amount'){
          setRevenueAmount( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'funding_amount_max'){
          setFundingMax( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'funding_amount_min'){
          setFundingMin( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'desired_fee_percentage'){
          setFee( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'desired_repayment_delay'){
          setDesiredRepayment( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'funding_amount'){
          setFundingAmount( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'revenue_percentage'){
          setRevPercentage( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'revenue_shared_frequency'){
          setRevFreq( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'use_of_funds'){
          setUseOfFunds( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'revenue_percentage_min'){
          setRevMin( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
        else if(loanData[i].name === 'revenue_percentage_max'){
          setRevMax( loanData[i].label, loanData[i].name, loanData[i].placeholder, loanData[i].tooltip, loanData[i].value)
        }
      }
    }
    setBool(true); 
      
    }, [loanData])

const value =  {
    loanData, 
    revenueAmount, 
    fundingMax, 
    fundingMin, 
    fee, 
    desiredRepayment, 
    fundingAmount, 
    revPercentage, 
    revFreq, 
    useOfFunds, 
    revMin,
    revMax
}; 

return <ContextProvider.Provider value = {value}> {children}</ContextProvider.Provider>
}; 