/* eslint-disable react/prop-types */
import { FaCirclePlus } from "react-icons/fa6";

function Status(props) {
  if (!props.status) {
    return null;
  }
  return (
    <div >
      {
        props && props.status && <div className="flex flex-col gap-2 items-center w-fit " >
          <div className="border-2 border-slate-950 rounded-full h-14 w-14  relative">
            <img className="max-w-full  rounded-full" src={props.status.imageUrl} alt="" />
          {props.status.id == 1 && <FaCirclePlus className='plus absolute -bottom-2 bg-white p-[2px] -right-2 text-blue-600 text-2xl' />}
          </div>
          <p className='name text-sm'>{props.status.name}</p>
        </div>
      }
    </div>
  )
}

export default Status
