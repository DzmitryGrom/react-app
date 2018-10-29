import React, {Component, PureComponent} from 'react'

export class Article extends PureComponent {
    state =  {
        isOpen: this.props.defaultOpen,
        counter: 0
    }

    // shouldComponentUpdate(nextProps, nextState) {       
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
        console.log('___', 'componentWillMount');
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.defaultOpen != this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        }) 
    }

    componentWillUpdate() {
        console.log('___', 'componentWillUpdate');
    }

    render(){
        const {article} = this.props;
        const body = this.state.isOpen && <section className='card-text'>{article.text}</section>
        return(
            <div className='card mx-auto' style={{ width: '50%' }}>
                <div className='card-header'>
                    <h2 onClick={this.cont}>{article.title}
                        clicked {this.state.counter}
                        <button onClick={this.handleClick} className='btn btn-primary btn-lg float-right'>{this.state.isOpen ? 'close' : 'open'}</button>
                    </h2>
                </div>
                <div className='card-body'>
                    <h6 className='card-subtitle text-muted'>creation date: {new Date(article.date).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }) 
    }

    cont = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    

}

export default Article;