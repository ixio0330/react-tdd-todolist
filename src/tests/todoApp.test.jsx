import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import TodoApp from '../components/todoApp';

describe('<TodoApp />', () => {
  test('할 일을 입력하고 추가 버튼을 누르면 할 일 목록에서 보여준다.', async () => {
    render(<TodoApp />);
    const todoInput = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: '추가' });

    await userEvent.type(todoInput, 'TDD 공부하기');
    await userEvent.click(addButton);

    const todoText = screen.getByText('TDD 공부하기');
    expect(todoText).toBeInTheDocument();
  });

  test('할 일을 클릭하면 완료 표시로 선을 긋는다.', async () => {
    render(<TodoApp />);
    const todoInput = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: '추가' });

    await userEvent.type(todoInput, 'TDD 공부하기');
    await userEvent.click(addButton);
    
    const todoText = screen.getByText('TDD 공부하기');
    await userEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  test('삭제 버튼을 누르면 할 일 목록에서 제거되어 화면에 보여지지 않는다.', async () => {
    render(<TodoApp />);
    const todoInput = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: '추가' });

    await userEvent.type(todoInput, 'TDD 공부하기');
    await userEvent.click(addButton);
    
    const todoText = screen.getByText('TDD 공부하기');
    const deleteButton = screen.getByRole('button', { name: '삭제' });

    await userEvent.click(deleteButton);
    expect(todoText).not.toBeInTheDocument();
  });
});