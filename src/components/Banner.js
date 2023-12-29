import React from 'react';
export const Banner = (props) => {
    const { additionalClasses, children: content } = props;
    const defaultClasses = 'banner';
    const combinedClasses = `${defaultClasses} ${additionalClasses || ''}`;
    return (
        <div className={combinedClasses}>
            <div className="bg"></div>
            <div className="banner-wrapper">
                {content}
            </div>
        </div>
    );
}