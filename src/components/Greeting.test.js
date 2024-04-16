// Import necessary functions and components from the testing library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// test suite for the Greeting component

// Describe the test suite for the Greeting component
describe('Greeting component', () => {

    // test case 

    // Test if the Hello World text is rendered
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />);
    
        // Act 
        // ... nothing
    
        // Assert 
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();

        /*
            getByText 用来查询页面上是否存在某段特定的文本。

            这个函数期望能够找到一个匹配的元素，如果找不到，则会抛出一个错误。
            
            这使得 getByText 特别适合用于你确定页面上必须存在某个元素时的场景。
        */
    });

    // test case 

    // Test if the good to see you text is rendered if the button was NOT clicked
    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    // test case 

    // Test if the "Changed!" text is rendered if the button was clicked
    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
    
        // Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
      });

    // test case 

    // Test if the good to see you text is NOT rendered if the button was clicked
    test('does not render "good to see you" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
    
        // Assert
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();

        /*
            queryByText 也用于根据文本内容查找页面元素，但与 getByText 不同的是，
            如果没有找到匹配的元素，queryByText 不会抛出错误，而是返回 null。
            
            这使得 queryByText 特别适合用于检查页面上不应该存在某个元素的场景。
        */
    });
});


