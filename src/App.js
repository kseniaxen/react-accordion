import Article from './components/Article'
import articles from './articles'
import ArticleList from "./components/ArticleList";
function App() {
    const greetings = 'Hello React Accordion!'
  return (
    <div>
        {/*{greetings}
        <Article article={articles[0]}/>*/}
        <ArticleList articles={articles}/>
    </div>
  );
}

export default App;
