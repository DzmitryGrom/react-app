import React, { PureComponent } from 'react'
import { Article } from '../Article'
import './style.css'

export class ArticleList extends PureComponent {
    render(){
        const articleElement = this.props.articles.map((articles, index) => 
            <li className='article__item' key = {articles.id}><Article article={articles} defaultOpen={index === 0}/></li>
        )
        return (
            <ul>
                {articleElement}
            </ul>
        ) 
    } 
}