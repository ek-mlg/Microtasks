import React, {useState} from 'react';
import './App.css';

type filterType = 'all' | 'dollar' | 'ruble'

function App() {

    let [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: 'a1234567890'},
        {banknote: "dollar", nominal: 50, number: 'z1234567890'},
        {banknote: "ruble", nominal: 100, number: 'w1234567890'},
        {banknote: "dollar", nominal: 100, number: 'e1234567890'},
        {banknote: "dollar", nominal: 50, number: 'c1234567890'},
        {banknote: "ruble", nominal: 100, number: 'r1234567890'},
        {banknote: "dollar", nominal: 50, number: 'X1234567890'},
        {banknote: "ruble", nominal: 100, number: 'V1234567890'}
    ])

    const [filter, setFilter] = useState<filterType>('all')

    let currentMoney = money

    if (filter === 'dollar'){
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "dollar")
    }

    if (filter === 'ruble'){
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "ruble")
    }
    
    const onFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }
    

    return(
        <>
        <ul>
            {currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknote} </span>
                        <span>{objFromMoneyArr.nominal} </span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
            <button onClick={() => onFilterHandler('all')}>All</button>
            <button onClick={() => onFilterHandler('ruble')}>Rubles</button>
            <button onClick={() => onFilterHandler('dollar')}>Dollars</button>
        </>
    );
}

export default App;
