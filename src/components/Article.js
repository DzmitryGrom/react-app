import React, {Component} from 'react'

class Article extends Component {
    state =  {
        isOpen: false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }) 
    }

    render(){
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return(
            <div>
                <h2>{article.title}
                    <button onClick={this.handleClick}>{this.state.isOpen ? 'close' : 'open'}</button>
                </h2>
                {body}
                <h3>creation date: {new Date(article.date).toDateString()}</h3>
            </div>
        )
    }

}



export default Article;