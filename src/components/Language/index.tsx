import React from 'react';
import { Row } from 'antd';
import './index.css'

export default () => {
    return (
        <div className="language">
            <Row>
                <h2 className="language-item">EN</h2>
            </Row>
            <div className="language-vl"></div>
            <Row>
                <h2 className="language-item">TH</h2>
            </Row>
        </div>
    );
}