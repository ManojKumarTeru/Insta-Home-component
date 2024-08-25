import Post from './post/Post'
import Status from './status/Status'
import StatusContainer from './status/StatusContainer'

function InstaHome() {
  return (
    <div className=' w-full '>
        <div>
            <Status />
            <StatusContainer/>
            <Post/>
        </div>
    </div>
  )
}

export default InstaHome
