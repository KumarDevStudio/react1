import React, { useState } from 'react'
import './Cal.css';


const Cal = () => {

    const [value, setValue] = useState('');

    return (
        

            <div class="calculator">
                <input type="text" id="display" value={value} readonly />

                <div>
                    <input type='button' value="AC" onClick={e => setValue('')} />
                    <input type='button' value="DEL" onClick={e => setValue(value.slice(0, -1))} />                    
                    <input type='button' value="%" onClick={e => setValue(value + e.target.value)} />                      
                    <input type='button' value="/" onClick={e => setValue(value + e.target.value)} />


                </div>

                <div>
                    <input type='button' value="7" onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value="8" onClick={e => setValue(value + e.target.value)} />                       
                    <input type='button' value="9" onClick={e => setValue(value + e.target.value)} />                      
                    <input type='button' value="*" onClick={e => setValue(value + e.target.value)} />

                </div>

                <div>
                    <input type='button' value="4" onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value="5" onClick={e => setValue(value + e.target.value)} />                       
                    <input type='button' value="6" onClick={e => setValue(value + e.target.value)} />                       
                    <input type='button' value="-" onClick={e => setValue(value + e.target.value)} />

                </div>

                <div>
                    <input type='button' value="1" onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value="2" onClick={e => setValue(value + e.target.value)} />                       
                    <input type='button' value="3" onClick={e => setValue(value + e.target.value)} />                      
                    <input type='button' value="+" onClick={e => setValue(value + e.target.value)} />

                </div>

                <div>
                    <input type='button' value="00" onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value="0" onClick={e => setValue(value + e.target.value)} />                     
                    <input type='button' value="." onClick={e => setValue(value + e.target.value)} />                      
                    <input type='button' value="=" onClick={e => setValue(eval(value))} />

                </div>
            </div>

        
    )
}

export default Cal;