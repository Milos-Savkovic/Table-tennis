import React from 'react';

import './Settings.css';
import { Menu, Dropdown, Icon, Switch as Switchs, notification } from 'antd';

import { NavLink } from 'react-router-dom'

const openNotification = () => {
    notification.open({
      message: 'Active',
      description: 'You are now active! Other players can see you and challenge you. (If theyre brave    enough)',
      placement: 'bottomRight',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

const menu = (
            <Menu>
                <Menu.Item>
                    <NavLink to="/edit-profile">Edit profile</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <p>
                        <span style={{ marginRight: '5px'}}>Active</span>
                        <Switchs size="small" onChange={openNotification} />
                        </p>
                    </Menu.Item>
                        <Menu.Divider />
                    <Menu.Item>
                    <NavLink to="/">Log out</NavLink>
                </Menu.Item>
            </Menu>
);

const settings = () => {
    return (
            <div className="settings">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link white-color" href="#">
                        <Icon type="setting" style={{ fontSize: '30px'}} />
                    </a>
                </Dropdown>
             
            </div>
    )
}

export default settings;

