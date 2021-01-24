import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { erfasseTermin } from '../actions'

const ErfasseTermin = () => {
 let inputName: any;
 let inputDatum: any;
 const dispatch = useDispatch();

 return (
   <div>
     <form onSubmit = { event => {
       event.preventDefault()
       dispatch(erfasseTermin(inputName.value, inputDatum.value));
       inputName.value = '';
       inputDatum.value = '';
     }}>
       <input ref = { node => inputName = node } />
       <input ref = { node => inputDatum = node } />
       <button type="submit">
         Termin hinzufügen
       </button>
     </form>
   </div>
 )
}

export default connect()(ErfasseTermin);