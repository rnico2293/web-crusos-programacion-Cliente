import React from 'react';
import { Route , Switch } from "react-router-dom";
import { Layout } from 'antd';

import "./LayoutAdmin.scss"

export default function LayoutAdmin (props) { 
    const { routes } = props;
    const {Header, Content, Footer } = Layout 

    return (
        <Layout>
            <h2>Menu SiderAdmin</h2>
            <Layout>
                <Header> Aca va el Header </Header>
                <Content>
                    <LoadRoutes routes = { routes }/>
                </Content>
                <Footer>Nicolas Rodriguez Buonomo</Footer>
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


