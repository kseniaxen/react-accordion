export default function Article (props) {

    return (
        <div>
            <h2>{props.article.title}</h2>
            <p>{props.article.content}</p>
        </div>
    )
}
