import React from 'react';
import { Route , Switch } from "react-router-dom";
import { Layout } from 'antd';
import MenuTop from '../components/Admin/MenuTop';

import "./LayoutAdmin.scss"
import Menu from 'rc-menu';


export default function LayoutAdmin (props) { 
    const { routes } = props;
    const {Header, Content, Footer } = Layout 

    return (
        <Layout>
            {/* TO DO: Menu Sider. */}
            <Layout className="layout-admin">
                <Header className="layout-admin-header"> 
                
                <MenuTop /> 

                </Header>
                <Content className="layout-admin-content">
                    <LoadRoutes routes = { routes }/>
                </Content>
                <Footer className="layout-admin-footer">
                    Nicolas Rodriguez 
                </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes ({routes}) {

    return (
        <Switch>
            {routes.map ((route,index) => (
        <Route
          key = {index}
          path = {route.path}
          exact = {route.exact}
          component = {route.component}
          />
        ))}
        </Switch>
    );
    
}


