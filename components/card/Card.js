import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    closeMoreDetails = (e) => {
        e.target.parentElement.parentElement.classList.remove("open");
    }

    render() {
        return (
            <article className="card" id={this.props.cardItem.id}>
                <button className={`card__button-delete${this.props.flagDeleteCard ? " visible" : ""}`}
                        onClick={this.deleteCard}/>
                <h3 className="card__title">{this.props.cardItem.title}</h3>
                <h4 className="card__category">{this.props.cardItem.category}</h4>
                {this.props.cardItem.description &&
                    <button className="card__more-details" onClick={this.openMoreDetails}>More details</button>
                }
                <p className="card__bottom">
                    <span className="card__sum">{this.props.cardItem.money}</span>
                    <span className="card__date">{this.props.cardItem.date}</span>
                </p>
                {this.props.cardItem.description &&
                <div className="card__description">
                    <p>{this.props.cardItem.description}</p>
                    <button className="card__more-details" onClick={this.closeMoreDetails}>Hide</button>
                </div>
                }
            </article>
        )
    }
}

export default Card;
