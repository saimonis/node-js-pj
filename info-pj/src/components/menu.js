import React from "react";
import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";

function AppMenu(props) {
    const {pathname} = useLocation();
    return (
        <Menu selectedKeys={[pathname]} mode="horizontal" theme="dark">
            <Menu.Item key="/">
                <Link to="/">React@@@</Link>
            </Menu.Item>
            <Menu.Item key="/login">
                <Link to="/login">Log in</Link>
            </Menu.Item>
            <Menu.Item key="/register">
                <Link to="/register">Register</Link>
            </Menu.Item>
        </Menu>
    );

}

export default AppMenu