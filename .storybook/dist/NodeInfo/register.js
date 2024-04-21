import { TabWrapper } from '@storybook/components';
import { addons, types, useChannel } from '@storybook/manager-api';
import React, { useState } from 'react';
import { JSONTree } from 'react-json-tree';
import { ADDON_ID, TAB_ID } from './types.js';
const theme = {
    scheme: 'custom',
    base00: '#ffffff',
    base01: '#aeb8c4', // keyの色
    base02: '#9b9b9b', // テキスト色
    base03: '#9b9a9a', // 配列/オブジェクトの区切り線の色
    base04: '#909090',
    base05: '#1e1e1e', // テキストの色
    base06: '#efefef', // 配列/オブジェクトの背景色
    base07: '#9e9e9e',
    base08: '#f44336',
    base09: '#ff9800',
    base0A: '#ffeb3b',
    base0B: '#4caf50',
    base0C: '#00bcd4',
    base0D: '#2196f3',
    base0E: '#9c27b0',
    base0F: '#673ab7',
};
const Panel = () => {
    const [items, setItems] = useState([]);
    useChannel({
        [ADDON_ID]: (item) => {
            setItems((items) => [item, ...items].slice(0, 100));
        },
    });
    return (React.createElement("div", null, items.map((item, index) => (React.createElement("div", { key: index },
        React.createElement("div", { style: { padding: '0 4px', color: 'blue', marginTop: '-4px' } },
            React.createElement(JSONTree, { data: item, theme: theme })),
        React.createElement("hr", null))))));
};
const render = ({ active }) => (React.createElement(TabWrapper, { active: !!active },
    React.createElement(Panel, null)));
addons.register(ADDON_ID, () => {
    const addPanel = () => addons.add(TAB_ID, {
        type: types.PANEL,
        title: 'Node info',
        render,
    });
    addPanel();
});