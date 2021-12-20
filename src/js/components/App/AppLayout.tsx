import React from "react";
import './appLayout.css';
import 'antd/dist/antd.css';
import { Flex, Container } from './style/layout.styled';
import { AppStoreProps, AppProps } from "./App.interfaces";
import { Layout, Breadcrumb, Typography, Select } from 'antd';
import TopNav from '../layouts/TopNav';
import { StoreType } from '../../common/resources/redux/types';
import { connect } from './../../common/ReduxDecorator';
import Dashboard from "../screens/dashboard";
import SideNav from "../layouts/sideNav";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;

@connect(
    (store: StoreType): AppStoreProps => {
        if (!store) return ({} as unknown) as AppStoreProps;

        return {

        }
    }
)

export default class AppLayout extends React.Component<AppProps> {
    state = {
        collapsed: true,
    }

    render(): React.ReactNode {
        return (
            <>
                <Layout style={{ background: "white" }}>
                    <Header className="header">
                        <TopNav />
                    </Header>
                    <Content style={{ padding: '0 50px', height: "calc(100vh - 200px)" }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Clothing</Breadcrumb.Item>
                            <Breadcrumb.Item>Men T-shirts</Breadcrumb.Item>
                        </Breadcrumb>
                        <div><b>Men T-shirts </b> : 3456 items</div>
                        <Flex>
                            <Title level={4} style={{ width: "200px" }}>Filters</Title>
                            <Flex marginLeft="20px">
                                <Select bordered={false} placeholder="Bundles"></Select>
                                <Select bordered={false} placeholder="Country of Origin"></Select>
                                <Select bordered={false} placeholder="Size"></Select>
                            </Flex>
                        </Flex>
                        <hr />
                        <Layout style={{ padding: '24px 0', background: "white", height: "100%" }}>
                            <Sider className="site-layout" width={250}>
                                <SideNav Dispatch={this.props.dispatch}></SideNav>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }} className="layout">
                                <Container>
                                    <Dashboard></Dashboard>
                                </Container>
                            </Content>
                        </Layout>
                    </Content>
                </Layout >
            </>
        )
    }
}