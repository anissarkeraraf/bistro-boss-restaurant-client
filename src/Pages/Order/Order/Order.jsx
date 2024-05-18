import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseManu from "../../../componants/Hooks/UseManu";
import FoodCard from "../../../componants/FoodCard/FoodCard";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";


const Order = () => {

    const categories = ['salads', 'pizza', 'soups', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    console.log(category)

    const [manu] = UseManu();
    console.log(manu)
    const dessert = manu.filter(item => item.category === 'dessert')
    const salad = manu.filter(item => item.category === 'salad')
    const pizza = manu.filter(item => item.category === 'pizza')
    const soup = manu.filter(item => item.category === 'soup')
    const drinks = manu.filter(item => item.category === 'drinks')

    
    return (
        <div>
            <Cover img={coverImg} title={"Our Order"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salads</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs itmes={salad}></OrderTabs>
                    {/* <div className="grid md:grid-cols-3 gap-10">
                        {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> */}
                </TabPanel>
                <TabPanel>
                    <OrderTabs itmes={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs itmes={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs itmes={dessert}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs itmes={drinks}></OrderTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;