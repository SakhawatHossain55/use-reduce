import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../PatientReducer/PstientReducer';

const PatientManagements = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD_PATIENT',
         name: nameRef.current.value,
         id: state.patients.length + 1,
    })
        nameRef.current.value = ''
    }
    return (
        <div>
            <h2>This is patient management: {state.patients.length}</h2>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}></input>
            </form>
            {
                state.patients.map(pt => <li 
                    key={pt.id} onClick={()=> dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                    >
                    {pt.name}
                    </li>
                    )
            }
        </div>
    );
};

export default PatientManagements;