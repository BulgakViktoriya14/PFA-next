import React from 'react';
import firebase from 'firebase';
import Router from 'next/router'

class FormChangeAvatar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorText: ""
        }

        this.labelInputFile = React.createRef();
    }

    saveNewAvatar = (e) => {
        e.preventDefault();
        if(this.state.errorText !== "") return;
        let file = this.props.inputFile.current.files[0];
        let _this = this;
        if (file) {
            firebase.storage().ref().child(`avatars/${_this.props.idUser}`).put(file)
                .then(function (result) {
                    _this.setState({errorText: ""});
                    Router.reload(window.location.pathname);
                });
        } else {
            this.setState({errorText: "You haven't selected a file"});
        }
    }

    uploadFile = () => {
        let file = this.props.inputFile.current.files[0];
        console.log(file, file.type, file.size)
        if (file.type !== 'image/png' || file.type !== 'image/jpeg') {
            this.setState({errorText: "Wrong file type"});
            return;
        } else {
            this.labelInputFile.current.classList.add("upload-file");
        }
    }

    render() {
        return (
            <form className="form form-change-avatar">
                <div className="form__wrapper-file">
                    <label htmlFor="money" className="form__label" ref={this.labelInputFile}>Select a file</label>
                    <input type="file" aria-label="file for avatar" id="file" name="file" className="form__input"
                           onChange={this.uploadFile} ref={this.props.inputFile}/>
                           <span className="form__notice">Files allowed: jpg and png</span>
                </div>
                <button className="form__submit" name="submit"
                        onClick={this.saveNewAvatar}>Save photo
                </button>
                {this.state.errorText &&
                    <p className="massage-error">{this.state.errorText}</p>
                }
            </form>
        )
    }
}

export default React.forwardRef((props, ref) => <FormChangeAvatar inputFile={ref} {...props}/>);
