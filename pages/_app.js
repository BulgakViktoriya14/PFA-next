import '../styles/css/index.css';
import '../node_modules/chartist/dist/chartist.css';
import '../node_modules/chartist/dist/chartist.js';
import {createStore} from 'redux';
import rootReducer from '../reducers/index.js';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import HeadMain from "../components/common/Head";
import {firebaseConfig} from '../firebaseConfig.js';

const store = createStore(rootReducer);

firebase.initializeApp(firebaseConfig);

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <HeadMain/>
            <Component {...pageProps}/>
        </Provider>
    )
}
