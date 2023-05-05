import '../styling/RightPanel.styles.css'

const RightPanel = ({revenueAmount,fundingMax, findingMin, fee, desiredRepayment, fundingAmount, revPercentage, revFreq, useOfFunds, revMin, revMax}) => {
    return(
        <div>
        <div className='group-2413'>
            <div className='rectangle-22B'/>
            <p className='results'> Results </p>
            <p className='ABR' > {revenueAmount} </p>
            <p className='funding-amount'> {fundingAmount} </p>
            <p className='fees'> Fees </p>

            <div className='Vector-22'/>
        
            <p className='TRS'> Total Revenue Share </p>
            <p className='expected-transfers'> Expected Transfers </p>
            <p className='ECD'> Expected completion date </p>

            <p className='ABR-RES'> $250,000 </p>
            <p className='funding-amount-res'> $60,000</p>
            <p className='fees-res'> (%50) $30,000 </p>
            <p className='TRS-RES'> $90,000</p>
            <p className='expected-transfers-res'> 47 </p>
            <p className='ECD-RES'> January 24, 2023 </p>
        </div>
        </div>
    )
}

export default RightPanel; 