import { useChannel, useEffect } from '@storybook/preview-api';
import React from 'react';
import { ADDON_ID } from './types.js';
const getDisplayValue = (element) => element instanceof HTMLInputElement
    ? element.value
    : element instanceof HTMLSelectElement
        ? element.options[element.selectedIndex].value
        : undefined;
const getRole = (node) => {
    const tag = node.tagName.toLowerCase();
    const type = node.getAttribute('type');
    const roles = {
        button: 'button',
        input_checkbox: 'checkbox',
        input_radio: 'radio',
        input_search: 'searchbox',
        input_text: 'textbox',
        select: 'listbox',
        textarea: 'textbox',
        a: 'link',
        img: 'img',
        nav: 'navigation',
        article: 'article',
        aside: 'complementary',
        footer: 'contentinfo',
        header: 'banner',
        main: 'main',
        section: 'region',
        ul: 'list',
        ol: 'list',
        li: 'listitem',
        table: 'table',
        th: 'columnheader',
        tr: 'row',
        td: 'gridcell',
    };
    return (node.getAttribute('role') ??
        (roles[tag] || roles[`${tag}_${type}`]));
};
const getLabel = (node) => {
    if (!('labels' in node))
        return null;
    const label = node.labels?.[0];
    if (!label)
        return null;
    const control = label.control;
    return control === node ? label.textContent : null;
};
const getAccessibility = (node) => Object.fromEntries([
    ...Array.from(node.attributes)
        .filter(({ name }) => name.startsWith('aria-'))
        .map(({ name, value }) => [name, value]),
]);
export const NodeInfoDecorator = (Story) => {
    const emit = useChannel({});
    useEffect(() => {
        const property = {};
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const element = document.elementFromPoint(mouseX, mouseY);
            if (element !== property.element) {
                property.element = element;
                const item = element &&
                    !['html', 'body'].includes(element.tagName.toLowerCase()) && {
                    tag: element.tagName,
                    role: getRole(element),
                    accessibility: getAccessibility(element),
                    label: getLabel(element),
                    display: getDisplayValue(element),
                    testId: element.getAttribute('data-testid'),
                    placeholder: element.getAttribute('placeholder'),
                    text: element.textContent?.trim(),
                };
                item && emit(ADDON_ID, item);
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [emit]);
    return React.createElement(Story, null);
};
