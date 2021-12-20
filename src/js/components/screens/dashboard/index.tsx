import React from 'react';
import { connect } from '../../../common/ReduxDecorator';
import { StoreType } from '../../../common/resources/redux/types';
import { Typography, Pagination, Carousel } from 'antd';
import { Flex, NonFlex } from './styled/dashboard.styled';
import { DashboardStoreProps } from './interfaces/dasboard.interfaces';
import data from './../../../common/data.json';

const { Title, Text } = Typography;
@connect(
    (store: StoreType): DashboardStoreProps => {
        if (!store) return ({} as unknown) as DashboardStoreProps;

        return {
            categories: store.sideNav.categories,
            brand: store.sideNav.brand,
        }
    }
)

export default class Dashboard extends React.Component<DashboardStoreProps> {
    state = {
        currentPage: 1,
        postPerPage: 4,
        currentPost: [],
        categories: [],
        brand: [],
        filteredData: data
    }

    componentDidMount = () => {
        this.getData();
    }

    componentDidUpdate = (prevprops: any) => {
        if (this.props.categories !== prevprops.categories) {
            this.setState({
                categories: this.props.categories,
            }, () => {
                this.getFilteredData()
            })
        }

        if (this.props.brand !== prevprops.brand) {
            this.setState({
                brand: this.props.brand,
            }, () => {
                this.getFilteredData()
            })
        }
    }

    getData = () => {
        const { currentPage, postPerPage, filteredData } = this.state;
        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        const currentPost = filteredData.slice(indexOfFirstPost, indexOfLastPost);

        this.setState({
            currentPost
        })
    }

    fetchMore = (num: any) => {
        this.setState({
            currentPage: num,
        }, () => {
            this.getData()
        })
    }

    getFilteredData = () => {
        const {
            categories,
            brand,
        }: any = this.state;

        this.setState({
            filteredData: data.filter((filteredData: any) => {
                let filter = true;
                if (categories.length !== 0 && !categories.includes(filteredData.type)) {
                    filter = false;
                }

                if (brand.length !== 0 && !brand.includes(filteredData.brand)) {
                    filter = false;
                }

                return filter;
            })
        }, () => {
            this.getData()
        });
    }

    render() {
        const { currentPost, filteredData } = this.state;
        return (
            <>
                <Flex>
                    {currentPost.map((v: any, k: number) => {
                        return (
                            <NonFlex width="40%" height="20%" margin="30px" key={"post" + k}>
                                <Carousel autoplay>
                                    {
                                        v.pictures && v.pictures.map((pic: string, k: number) => {
                                            return (
                                                <NonFlex width="100%" key={k + "pic"}>
                                                    <img src={window.location.origin + "/" + pic} alt="" style={{ backgroundImage: "fit-content" }} width="100%" height="100%"></img>
                                                </NonFlex>
                                            )
                                        })
                                    }
                                </Carousel>
                                <Title level={5} style={{ marginBottom: "0px" }}>{v.brand}</Title>
                                <Text style={{ color: "rgba(0, 0, 0, 0.85)", fontWeight: "lighter" }}>{v.type}</Text>
                                <Title level={5} style={{ marginTop: "0px" }}>Rs. {v.price}</Title>
                            </NonFlex>
                        )
                    })}

                </Flex>
                <Flex flexDirection="row-reverse" width="100%">
                    {
                        filteredData.length > 4 ? (
                            <Pagination defaultCurrent={1} total={filteredData.length} pageSize={4} onChange={this.fetchMore} />
                        ) : null
                    }
                </Flex>
            </>
        )
    }
}