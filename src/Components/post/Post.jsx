import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

const Post = () => {
  return (
    <div className="mt-3">
      <PostHeader />
      <main className="my-2">
        <img src="/src/assets/Images/post1.jpg" alt="post" />
      </main>
      <PostFooter />
    </div>
  )
}

export default Post