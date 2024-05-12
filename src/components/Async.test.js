import { render, screen } from '@testing-library/react';
import Async from './Async';

// test suite for Async component
describe('Async component', () => {

    // test case
    test('renders posts if request succeeds', async () => {

        // 设置 window.fetch 函数为 jest 的模拟函数
        window.fetch = jest.fn(); 

        // 配置 fetch 函数的第一次调用时返回的模拟结果
        window.fetch.mockResolvedValueOnce({
            // 返回的数据通过 json 方法异步解析，模拟异步请求的数据解析过程
            json: async () => [{id: 'p1', title: 'First post'}]  // 返回一个包含单个帖子信息的数组
        });

        // 渲染 Async 组件
        render(<Async />)

        // get 所有的 <li> 元素
        const listItemElements = await screen.findAllByRole('listitem'); 
        // expect 它 有 超过 0 个 元素
        expect(listItemElements).not.toHaveLength(0); 
    }); 
})
