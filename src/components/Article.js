import {Component} from 'react'

export default class Article extends Component {
    state = {
        isOpen: true
    }
    handleToggleClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        const {article} = this.props
        const content = this.state.isOpen && <section className='card-text'>{article.content}</section>
        return (
            <div className='card mx-auto' style={{width:'50%'}}>
                <div className='card-header'>
                    <h2>
                        {article.title}
                        <button onClick={this.handleToggleClick} className='btn btn-primary btn-lg float-right'>Toggle</button>
                    </h2>
                </div>
                <div className='card-body'>
                    <section className='card-subtitle text-muted'>{(new Date(article.date)).toDateString()}</section>
                    {content}
                </div>
            </div>
        )
    }
}
