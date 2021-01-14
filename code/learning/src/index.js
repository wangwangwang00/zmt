import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css'
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import 'moment/locale/zh-cn';


import "./service/require"

import App from './16_Redux/App';

ReactDOM.render(<App age={18}/>, document.getElementById('root'));