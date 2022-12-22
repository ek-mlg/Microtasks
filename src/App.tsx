import React, {useState} from 'react';
import './App.css';
import { Body } from './site/body';
import {Header} from "./site/header";
import {Footer} from "./site/footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./components/Button";

function App() {

    let [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 108},
    ])

    // Domashka

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ];

    type NewComponentCarsType = {topCars:TopCarsType[]};

    type TopCarsType = {
        manufacturer: string,
        model: string
    };

    const NewComponentCars = (props:NewComponentCarsType) => {
        return (
            <table>
                    <tbody><th>Top Cars</th></tbody>
                <tr>
                    <th>Manufacturer</th>
                    {props.topCars.map((objectFromTopCarsArray, index)=>{
                        return (
                            <th key={objectFromTopCarsArray.model}>
                                {objectFromTopCarsArray.manufacturer}
                            </th>
                        );
                    })}
                </tr>
                <tr>
                    <th>Model</th>
                    {props.topCars.map((objectFromTopCarsArray, index)=>{
                        return (
                            <th key={objectFromTopCarsArray.model}>
                                {objectFromTopCarsArray.model}
                            </th>
                        );
                    })}
                </tr>
            </table>
        );
    }

   /* const myFirstSubscriber = () => {
        console.log('Hello im Vasya!')
    }

    const mySecondSubscriber = () => {
        console.log('Hello im Ivan!')
    }*/

    const onClickHandler = (name: string) => {
        console.log(name)
    }

   /* const for1 = () => {
        console.log(100200)
    }

    const for2 = (number: number) => {
        console.log(number)
    }*/

    const buttonSub1 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const buttonSub2 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }


    return(
        <div>
            {/*<div>
                <NewComponent students={students}/>
                <NewComponentCars topCars={topCars}/>
            </div>
            <div>
                <Header title={'New body'}/>
                <Body titleForBody={'New Body'}/>
                <Footer titleForfooter={'New Footer'}/>
            </div>*/}
            <div>
                <button onClick={(event)=>onClickHandler('Ivan')}>MyYouTubeChannel-1</button>
                <button onClick={(event) => onClickHandler('Vasya')}>MyYouTubeChannel-2</button>

                <Button name={'MyYouTubeChannel-1'} callBack={() => buttonSub1('Ivan', 21)}/>
                <Button name={'MyYouTubeChannel-2'} callBack={() => buttonSub2('Vasya', 18)}/>

                {/*<button onClick={() => onClickHandler('Ivan')}>MyYouTubeChannel-3</button>*/}
                {/* <button onClick={() => onClickHandler('some info')}>MyYouTubeChannel-3</button>*/}

                {/*<button onClick={for1}>1</button>
                <button onClick={() => for2(100200)}>2</button>*/}
            </div>
        </div>
    );


}

export default App;
