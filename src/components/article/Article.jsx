import './article.css'

const Article = ({ imgUrl, title, text }) => {

  return (
    <div className='article' data-aos="fade">
      <img className='article-img' src={imgUrl}/>
      <div className='article-container'>
        <h3 className='article-heading'>{title}</h3>
        <p className='article-paragraph'>{text}</p>
      </div>
    </div>
  )
}

export default Article
