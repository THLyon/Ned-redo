
import '../styling/AnnualRevenue.styles.css'; 

const AnnualRevenue = ({revenueField, onSearchChange, placeholder}) => {
    return (
        <div className='group-2542'> 
            <p className='rev-desc'> What is your annual business revenue? </p>
            <input className='input' type='search' revenueField={revenueField} onChange={onSearchChange} placeholder={placeholder}/> 
        </div>
    )
}; 

export default AnnualRevenue; 
//when I get to functionality of business revenue input here is approach 
//value={} onChange={event => this.setState({financialGoal: event.target.value.replace(/\D/,'')})}