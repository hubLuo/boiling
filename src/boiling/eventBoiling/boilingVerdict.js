/**
 * Created by Derry on 2018/3/28.
 */

import React from 'react';
/*方法型组件，其特点为无状态*/
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default BoilingVerdict