import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            backgroundColor: isSelected ? '#ffb8b8' : '#fff',
            padding: 10,
            fontSize: '16px'
        };
    },

    menu: (provided, state) => ({
        ...provided,
        padding: 0,
        cursor: 'pointer',
        border: '1px solid #000',
        borderRadius: 0,
    }),

    menuList: (provided, state) => ({
        ...provided,
        overflowY: 'hidden',
    })
}

class SelectItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: []
        }
    }

    componentDidMount() {
        let array = [];
        this.props.optionsArray.forEach(function (item) {
            array.push({value: item, label: item});
        })

        this.setState({options: array})
    }

    render() {
        return (
            <Select ref={this.props.innerRef} styles={customStyles} options={this.state.options} placeholder={""} className={this.props.className} id={this.props.id} required={this.props.required}/>
        );
    }
}

export default React.forwardRef((props, ref) => <SelectItem innerRef={ref} {...props}/>);
