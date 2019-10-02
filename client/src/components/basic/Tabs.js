import React, { Component } from 'react'

export class Tabs extends Component {
    render() {
        const tabs={
            marginTop: "5%"
        }
        return (
            <div style={tabs}>
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s6"><a href="#test1">Announcements</a></li>
                            <li className="tab col s6"><a className="active" href="#test2">Feed</a></li>
                        </ul>
                    </div>
                    <div id="test1" className="col s12">Test 1</div>
                    <div id="test2" className="col s12">Test 2</div>
                </div>
            </div>
        )
    }
}

export default Tabs
