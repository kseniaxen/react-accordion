import Article from './components/Article'
import articles from './articles'
import ArticleList from './components/ArticleList'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    const greetings = 'Hello React Accordion!'
  return (
    <div className='container'>
        {/*{greetings}
        <Article article={articles[0]}/>*/}
        <div className='jumbotron'>
            <h1 className='display-3'>React Accordion Demo</h1>
        </div>
        <ArticleList articles={articles}/>
    </div>
  );
}

export default App;
