import React from 'react';
import { Input } from 'antd';

export default class TopNav extends React.Component {
    state = {
        topNavElement: ['Men', 'Women', 'Kids', 'Home&Living', 'Beauty'],
    }

    render() {
        const { topNavElement } = this.state
        return (
            <>
                <div className="header-wrapper">
                    <div className="logo">Logo</div>
                    <div className="menu">
                        {
                            topNavElement.map((v, k) => {
                                return (
                                    <div key={k + "element"}><b>{v}</b></div>
                                )
                            })
                        }
                    </div>
                    <div className="search">
                        <Input type="search" className="search-bar" />
                    </div>
                </div>
            </>
        )
    }
}