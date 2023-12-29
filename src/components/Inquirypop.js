import { React, useImperativeHandle, forwardRef, useState } from 'react';

export const Inquirypop = forwardRef((props, ref) => {

    const [Inquirymodel, SetInquirymodel] = useState(false);
    useImperativeHandle(ref, () => ({
        show_inquirymodel() {
            SetInquirymodel(!Inquirymodel);
            props.showoverlay.current.show_overlay();
        },
        hide_inquirymodel() {
            SetInquirymodel(false);
            props.showoverlay.current.hide_overlay();
        }
    }))
    return (
        <div className={`model Inquirypop ${Inquirymodel ? 'is-open' : ''}`} ref={ref}>
            <button className='close-model' onClick={() => ref.current.hide_inquirymodel()}>
                <img src={require('../assets/icon/close.png')} alt="Close" />
            </button>
            <div className="model-body">
                <h1>Inquiry Pop</h1>
            </div>
        </div>
    );
});