import React from 'react';
import Card from "../card/Card";
import ButtonProfile from "../buttons/ButtonProfile";

class BlockReportCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: 6,
        }
    }

    loadMore = () => {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }

    render() {
        return (
            <div className="container">
                {this.props.flag &&
                    this.props.cardsReport[this.props.idButton].slice(0, this.state.visible).map((item) =>
                        <Card key={item.id} cardItem={item} flagDeleteCard={false}/>
                    )
                }

                {this.props.flag &&
                        this.state.visible < this.props.cardsReport[this.props.idButton].length &&
                    <ButtonProfile functionOnCLick={this.loadMore} nameButton={"Load more"}/>
                }
            </div>
        )
    }
}

export default BlockReportCards
