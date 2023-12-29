import { React, useImperativeHandle, forwardRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Hampop = forwardRef((props, ref) => {
    const [Hammodel, SetHammodel] = useState(false);
    useImperativeHandle(ref, () => ({
        show_hammodel() {
            SetHammodel(!Hammodel);
            props.showoverlay.current.show_overlay();
        },
        hide_hammodel() {
            SetHammodel(false);
            props.showoverlay.current.hide_overlay();
        }
    }))
    return (
        <div className={`model Hammodelpop ${Hammodel ? 'is-open' : ''}`} ref={ref}>
            <button className='close-model' onClick={() => ref.current.hide_hammodel()}>
                <img src={require('../assets/icon/close.png')} alt="Close" />
            </button>
            <div className="model-body">
                <ul>
                    <li><NavLink onClick={() => ref.current.hide_hammodel()} to="/about" activeclassname="active">About Us</NavLink></li>
                    <li><NavLink onClick={() => ref.current.hide_hammodel()} to="/pricing" activeclassname="active">Pricing</NavLink></li>
                    <li><NavLink onClick={() => ref.current.hide_hammodel()} to="/instructors" activeclassname="active">Instructors</NavLink></li>
                    <li><NavLink onClick={() => ref.current.hide_hammodel()} to="/contact" activeclassname="active">Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
    );
});