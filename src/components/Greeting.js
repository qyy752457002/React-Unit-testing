import { useState } from "react";

// 引入Output组件
import Output from './Output'; 

const Greeting = () => {   
    const [changedText, setChangedText] = useState(false);

    // 使用useState函数，将changedText的值设置为false
    const changedTextHandler = () =>{ 
        setChangedText(true);
    }

    // 定义changedTextHandler函数，当按钮被点击时，将changedText的值设置为true
    return (
        <div>
            <h2>Hello World!</h2>

            {/* 显示“It's good to see you!”，当changedText为false时 */}
            {!changedText && <Output>It's good to see you!</Output>}

            {/* 显示“Changed!”，当changedText为true时 */}
            {changedText && <Output>Changed!</Output>}

            {/* Changed Text! 按钮 */}
            <button onClick={changedTextHandler}>Changed Text!</button>
        </div>
    );
};

// 返回Greeting组件
export default Greeting;
