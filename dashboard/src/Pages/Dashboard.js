import { Typography, Card, Space, Statistic, Table } from "antd";
import {
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
    DollarCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../API";
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
        <div>
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
            </Space>
        </div>
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
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => Math.random()*1000),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => Math.random()*1000),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <Bar options={options} data={data} />
    )
}

export default Dashboard;
