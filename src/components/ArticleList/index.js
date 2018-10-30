import React, { PureComponent } from 'react'
import { Article } from '../Article'
import './style.css'

export class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    }
    render(){
        const articleElement = this.props.articles.map((articles, index) => 
            <li className='article__item' key = {articles.id}>
                <Article article={articles} 
                    isOpen={this.state.openArticleId === articles.id}
                    onButtonClick={this.handleClick.bind(this, articles.id)}
                    />
            </li>
        )
        return (
            <ul>
                {articleElement}
            </ul>
        ) 
    } 
    handleClick = openArticleId => this.setState({ openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId })
}