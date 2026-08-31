"use client"

import { useState } from "react"


export const ColorPicker = () => {
const [color, setColor] = useState('#fff')


    return(
        <main>
            <div className="h-30 flex rounded-2xl" style={{backgroundColor: color}}>
                <input type="color" name="" id="" value={color} onChange={(e) => setColor(e.target.value)} className="flex items-center justify-center rounded-2xl m-15"/>
                    
            </div>
        </main>
    )
}