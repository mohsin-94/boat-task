import React,{useState,useEffect} from 'react';

function Pagination({showPerPage,onPaginationChange,total}) {
    const [counter,setCounter] = useState(1)
    useEffect(() => {
        const value = showPerPage * counter
        onPaginationChange(value-showPerPage,value)
    },[counter])
    const onButtonHandler = (type) => {
        if(type === 'prev'){
            if(counter === 1){
                setCounter(1)
            }else{
                setCounter(counter - 1)
            }
        }else if(type == 'next'){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter)
            }else{
                setCounter(counter + 1)
            }
        }
    }
  return <div className="row">
            <div className="col-sm-12">
                <ul className='paginate'>
                    <li onClick={() => onButtonHandler('prev')}><span>🢐</span></li>
                    <li className="active">{counter}</li>
                    <li onClick={() => onButtonHandler('next')}><span>🢒</span></li>
                </ul>
            </div>
        </div>
}

export default Pagination;
