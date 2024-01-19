import"./NewsFeeds.css"
import Newsfeed from "../NewsFeed/NewsFeed"

const NewsFeeds = () => {
  return (
    <div className='newsfeeds_wrapper'>
    <main className='newsfeeds'> 
       <Newsfeed/>
       <Newsfeed/>
       <Newsfeed/>
       <Newsfeed/>
    </main>
      
    </div>
  )
}

export default NewsFeeds
