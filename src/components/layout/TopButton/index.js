import React from "react";
import './topbutton.style.css'
import { BsFillArrowUpCircleFill } from "react-icons/bs"

export default function TopButton(){
    const viewRef = React.useRef()
    const [top, setTop] = React.useState(0) 
    const displayTop = ()=>{
        setTop(document.documentElement.scrollTop)   
    }
    const windowTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    React.useLayoutEffect(()=>{
        window.addEventListener("scroll",displayTop)
        return () =>{
            window.removeEventListener("scroll",displayTop) 
        }
        
    }, [top]);
    return (
        <>
        {(top > 240)?
        <div 
            ref={viewRef}
            className="topBtn"
            onClick={windowTop}
            >
            <div className="icoTop">
                <BsFillArrowUpCircleFill/>
            </div>
            <div className='top'>
              <p className='topText'>Ir al principio</p>
            </div>
        </div>
          : ``
        }
        </>     
    )
}