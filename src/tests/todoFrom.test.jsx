import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import TodoFrom from "../components/todoFrom";

describe('<TodoFrom />', () => {
  test('할 일을 입력해야 추가 버튼이 활성화된다.', async () => {
    render(<TodoFrom />);
    const todoInput = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: '추가' });
    expect(addButton).toBeDisabled();

    await userEvent.type(todoInput, '테스트');
    expect(addButton).toBeEnabled();
  });

  test('할 일을 입력하고 추가 버튼을 누르면 할 일을 입력받는 창이 빈 값이 된다.', async () => {
    render(<TodoFrom onAddTodo={(todo) => {}} />);
    const todoInput = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: '추가' });
    expect(addButton).toBeDisabled();

    await userEvent.type(todoInput, '테스트');
    expect(addButton).toBeEnabled();

    await userEvent.click(addButton);
    expect(todoInput).toHaveValue('');
  });
});