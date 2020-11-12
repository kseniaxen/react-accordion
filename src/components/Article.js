// import {Component} from 'react'
import {useState} from 'react'

function Article(props) {
    const {article} = props
    const [isVisible, setVisibility] = useState(true)
    return(
        <div className='card mx-auto' style={{width:'50%'}}>
        <div className='card-header'>
            <h2>
                {article.title}
                <button onClick={()=>{setVisibility(!isVisible)}} className='btn btn-primary btn-lg float-right'>Toggle</button>
            </h2>
        </div>
        <div className='card-body'>
            <section className='card-subtitle text-muted'>{(new Date(article.date)).toDateString()}</section>
            <section style={{display: isVisible ? 'block': 'none'}} className='card-text'>{article.content}</section>
        </div>
    </div>
    );
}

// export default class Article extends Component {
//      state = {
//          isOpen: true
//      }
//      handleToggleClick = () => {
//          this.setState({isOpen: !this.state.isOpen})
//      }
//     render() {
//         const {article} = this.props
//         const content = this.state.isOpen && <section className='card-text'>{article.content}</section>
//         return (
//             <div className='card mx-auto' style={{width:'50%'}}>
//                 <div className='card-header'>
//                     <h2>
//                         {article.title}
//                         <button onClick={()=>{setVisibility(!isVisible)}} className='btn btn-primary btn-lg float-right'>Toggle</button>
//                     </h2>
//                 </div>
//                 <div className='card-body'>
//                     <section className='card-subtitle text-muted'>{(new Date(article.date)).toDateString()}</section>
//                     {content}
//                 </div>
//             </div>
//         )
//     }
// }
export default Article;