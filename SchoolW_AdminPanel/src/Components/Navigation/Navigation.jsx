import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
const items = [
  { key: '1', icon: <MailOutlined />, label:<Link to="/leaves">Leaves</Link> },
  { key: '2', icon: <MailOutlined />, label: <Link to="/applications">Applications</Link> },
  { key: '3', icon: <ContainerOutlined />, label: <Link to="/users">Users</Link> },
  { key: '4', icon: <ContainerOutlined />, label: <Link to="/newusers">New Users</Link> },
  { key: '5', icon: <ContainerOutlined />, label: <Link to="/event">New Event</Link> }

];
const Navigation = () => {
  const [collapsed] = useState(false);
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
     <div style={{ width: 256, background: '#001529' }}>
        <Menu
          defaultSelectedKeys={['']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </div>
  );
};
export default Navigation;