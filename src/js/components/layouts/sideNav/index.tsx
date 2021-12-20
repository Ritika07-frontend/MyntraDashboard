import React from 'react';
import { SidenavProps } from './interfaces/sidenavInterfaces';
import { Typography, Checkbox } from 'antd';
import { setCategories, setBrand, setPrice, setColor } from './../../../actions/sidenavAction';

const { Title } = Typography;

export default class SideNav extends React.Component<SidenavProps> {
    state = {
        categories: [
            { label: 'T-shirt', value: 'T-shirt' },
            { label: 'Lounge T-shirt', value: 'Lounge T-shirt' },
        ],
        brand: [
            { label: 'Roadstar', value: 'Roadstar' },
            { label: 'WROGN', value: 'WROGN' },
            { label: 'Puma', value: 'Puma' },
            { label: 'max', value: 'max' },
            { label: 'Dressbery', value: 'Dressbery' },
            { label: 'HRX', value: 'HRX' },
        ],
        price: [
            { label: 'Rs. 115 to Rs. 2336', value: 'Rs. 115 to Rs. 2336' },
            { label: 'Rs. 2336 to Rs. 4557', value: 'Rs. 2336 to Rs. 4557' },
            { label: 'Rs. 4557 to Rs. 6778', value: 'Rs. 4557 to Rs. 6778' },
            { label: '6778 to Rs. 8999', value: '6778 to Rs. 8999' },
        ],
        color: [
            { label: 'Black', value: 'Black' },
            { label: 'White', value: 'White' },
            { label: 'Blue', value: 'Blue' },
            { label: 'Red', value: 'Red' },
            { label: 'pink', value: 'Pink' },
            { label: 'Yellow', value: 'Yellow' },
        ]
    }

    onChangeCategories = (value: any) => {
        this.props.Dispatch(setCategories(value))
    }

    onChangeBrand = (value: any) => {
        this.props.Dispatch(setBrand(value))
    }

    onChangePrice = (value: any) => {
        this.props.Dispatch(setPrice(value))
    }

    onChangeColor = (value: any) => {
        this.props.Dispatch(setColor(value))
    }

    render() {
        const { categories, brand, price, color } = this.state
        return (
            <>
                <div className="side-nav-container">
                    <div>
                        <Title level={5}>CATEGORIES</Title>
                        <Checkbox.Group options={categories} onChange={this.onChangeCategories} />
                    </div>
                    <div className="option-wraper">
                        <Title level={5}>BRAND</Title>
                        <Checkbox.Group options={brand} onChange={this.onChangeBrand} />
                    </div>
                    <div className="option-wraper">
                        <Title level={5}>PRICE</Title>
                        <Checkbox.Group options={price} onChange={this.onChangePrice} />
                    </div>
                    <div className="option-wraper">
                        <Title level={5}>COLOR</Title>
                        <Checkbox.Group options={color} onChange={this.onChangeColor} />
                    </div>
                </div>
            </>
        )
    }
}