import Reacts from 'react'
import Classcomthree from './Classcomthree'

export default function Callcomfromothercom(props) {
    return (
        <div>
            <h5> {props.text.name} -
         {props.data}
            </h5>
            <Classcomthree text={{ name: 'JSH - Jai Shri Hanuman- use (this keyword)' }} data='Ayodhya' />
        </div>
    )
}