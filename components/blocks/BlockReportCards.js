import React from 'react';
import Card from "../card/Card";

class BlockReportCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                {this.props.flag &&
                    this.props.cardsReport[this.props.idButton].map((item) =>
                        <Card key={item.id} cardItem={item} flagDeleteCard={false}/>
                    )
                }
            </div>
        )
    }
}

export default BlockReportCards
