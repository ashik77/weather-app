import React, { useState } from 'react';

export default function InputField({name}) {
  const [state, setState] = useState('')
  return (
    <div>
        
            <input type="text" 
            value={state} 
            name={name}
            onChange={(e) => setState(e.target.value)} 
        />
    </div>
  );

}
