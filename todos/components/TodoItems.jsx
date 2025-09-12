import React from 'react'
import { FaCheckSquare } from 'react-icons/fa'
import { MdCheckBoxOutlineBlank, MdDelete } from 'react-icons/md'

const TodoItems = ({ text, id, isComplete, onDelete, markComplete }) => {
    console.log({ isComplete });
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1  items-center cursor-pointer' onClick={() => { markComplete(id) }}>
                {isComplete
                    ? <FaCheckSquare className='text-orange-500 rounded-full' />
                    : <MdCheckBoxOutlineBlank className='text-orange-500 rounded-full' />}

                <p className={`${isComplete && "line-through"} text-slate-700 ml-4 text-[17px]`}>{text}</p>
            </div>
            <MdDelete className=' cursor-pointer' onClick={() => onDelete(id)} />

        </div>
    )
}

export default TodoItems