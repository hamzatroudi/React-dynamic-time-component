import React from 'react'

const conversion= (time)=>{
    const milsecparsec= 1000
    const milsecparmin= 1000*60
    const milsecparheur= 1000*60*60

    const heurs= Math.floor(time/milsecparheur)
    const heurreste= time % milsecparheur

    const minutes= Math.floor(heurreste/milsecparmin)
    const minuterste= heurreste % milsecparmin

    const seconds= Math.floor(minuterste / milsecparsec)

    return heurs + ":" +minutes+ ":" +seconds
    

}


const Timer = (props) => {

    
    return <div className="time-container">
        <div className="time-inner-container">
            <div className="t-digits">
            {conversion(props.time)}
            </div>
            <div className="time-text">
                <div className="heur">Hour</div>
                <div className="minute">Minute</div>
                <div className="heur">Second</div>
            </div>
            <div>
                <button className="btnstart">Start</button>
                <button className="btnreset">Reset</button>
            </div>
        </div>
    </div>
}
    
export default Timer