import userImage from '../../assets/Images/AzeemSaifiLogo.png'
import Status from './Status'
const StatusContainer = () => {
    
    const statusList=[
        {
            id:1,
            imageUrl:userImage,
            name:"your story"
        },
        {
            id:2,
            imageUrl:"https://i.pravatar.cc/150?u=2",
            name:"john doe"
        },
        {
            id:3,
            imageUrl:"https://i.pravatar.cc/150?u=3",
            name:"caty"
        },
        {
            id:4,
            imageUrl:"https://i.pravatar.cc/150?u=4",
            name:"seara"
        },
        {
            id:5,
            imageUrl:"https://i.pravatar.cc/150?u=5",
            name:"random"
        },
    ]
    console.log(statusList)
  return (
    <div className='flex gap-3 p-3 overflow-x-auto border-b-[2px] mb-6'>
        {
          statusList && statusList.map(status=><Status key={status.id} status={status} />)
        }
    </div>
  )
}

export default StatusContainer