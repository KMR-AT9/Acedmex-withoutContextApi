import React, { useImperativeHandle, forwardRef, useState } from 'react';

export const Overlay = forwardRef((props, ref) => {

    const [overlay, SetOverlay] = useState(false);
    useImperativeHandle(ref, () => ({
        show_overlay() {
            SetOverlay(true);
        },
        close_pop() {
            props.modelState.current.hide_hammodel();
            props.modelInquiry.current.hide_inquirymodel();
            props.modelCart.current.hide_cartmodel();
        },
        hide_overlay() {
            if (ref.current) {
                SetOverlay(false);
            }
        }
    }));

    return (
        <div className={`overlay ${overlay ? 'is-open' : ''}`} ref={ref} onClick={() => { ref.current.hide_overlay(); ref.current.close_pop(); }}>
        </div>

    );
});
