import React, { PureComponent } from 'react'
import { ArticleList } from './ArticleList'
import articles from './fixtures'
import 'bootstrap/dist/css/bootstrap.css';

export class App extends PureComponent {
    state = {
        reverted: false
    }

    handleClick = () => {
        this.setState({
            reverted: !this.state.reverted
        }) 
    }

    render() {
        console.log('2', this.state);
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>
                        App name
                        <button onClick={this.handleClick}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles  }/>
            </div>
        )
    }
}