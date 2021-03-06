import _ from 'lodash';
import React from 'react';
import  { Sparklines , SparklinesLine, SparklinesReferenceLine }  from 'react-sparklines';

export default function Chart(props) {
    function average(data){
        return _.round(_.sum(data)/data.length);
    }
    return (
        <div>
            <Sparklines data={props.data} width={180} height={120}>
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>

            <div>
                {average(props.data) }
            </div>
        </div>
    )
}
