import React from 'react';

function Sideprice() {
    return (
        <div className="widget price mb-50">
                <h6 className="widget-title mb-30">Price</h6>
                <div className="widget-desc">
                    <div className="slider-range">
                        <div data-min="10" data-max="1000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="10" data-value-max="1000" data-label-result="">
                            <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                            <span className="ui-slider-handle ui-state-default ui-corner-all" ></span>
                            <span className="ui-slider-handle ui-state-default ui-corner-all" ></span>
                        <div className="ui-slider-range ui-corner-all ui-widget-header"></div></div>
                        <div className="range-price">$10 - $1000</div>
                    </div>
                </div>
            </div>
    )
}

export default Sideprice;
