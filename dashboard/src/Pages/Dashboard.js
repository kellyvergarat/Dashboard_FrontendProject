import { Typography, Card, Space, Statistic, Table } from "antd";
import {
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
    DollarCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders, getRevenue } from "../API";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    return ( 
            <Space sise ={20} direction="vertical" >
            <Typography.Title level={4}> Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard
                    icon={
                        <ShoppingCartOutlined
                            style={{
                                color: "green",
                                backgroundcolor: "rgba(0.255,0,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Orders"}
                    value={31324}
                />
                <DashboardCard
                    icon={<ShoppingOutlined
                        style={{
                            color: "blue",
                            backgroundcolor: "rgba(0,255,0.25)",
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8,
                        }} />}
                    title={"Inventory"}
                    value={2312}
                />
                <DashboardCard
                    icon={<UserOutlined
                        style={{
                            color: "purple",
                            backgroundcolor: "rgba(0.255,255,0.25)",
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8,
                        }} />}
                    title={"Customers"}
                    value={1200}
                />
                <DashboardCard
                    icon={<DollarCircleOutlined
                        style={{
                            color: "red",
                            backgroundcolor: "rgba(255,0,0.25)",
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8,
                        }} />}
                    title={"Revenue"}
                    value={10000000}
                />
            </Space>
            <Space>
                <RecentOrders />
                <DashboardChart/>
            </Space>
            </Space> 
    );
};
//passing props
function DashboardCard({ title, value, icon }) {
    return (
        <Space size={20} direction="vertical">
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Space>
    );
}

function RecentOrders() {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        getOrders().then((res) => {
            setDataSource(res.products.splice(0, 3))
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <Typography.Text>Recent Orders</Typography.Text>
            <Table
                columns={[{
                    title: "Title",
                    dataIndex: "title"
                },
                {
                    title: "Quantity",
                    dataIndex: "quantity"
                },
                {
                    title: "Price",
                    dataIndex: "discountedPrice"
                },
                ]}
                loading={loading}
                dataSource={dataSource}
                pagination={false}
            >
            </Table>
        </div>
    )
}

function DashboardChart() {

    const [revenueData , setRevenueData] = useState({
        labels:[],
        datasets:[]
    });

    useEffect(() => {
        getRevenue().then(res => {
            const labels = res.carts.map((cart) => {
                return `User-${cart.userId}`;
            });
            const data = res.carts.map((cart) => {
                return cart.discountedTotal;
            });

            const dataSource =  {
                labels,
                datasets: [
                  {
                    label: "Revenue",
                    data: data,
                    backgroundColor: 'rgba(255, 0, 0, 1)',
                  }
                ],
              };
              
              setRevenueData(dataSource);
        });
    }, []);
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };
    
    return (
        <Card style={{width:500, height:250}}>
            <Bar options={options} data={revenueData} />
        </Card>
    );
}

export default Dashboard;
