import { render, screen } from "@testing-library/react";
import TodoItem from "../components/todoItem";

describe('<TodoItem />', () => {
  test('할 일과 삭제 버튼을 보여준다.', () => {
    const todoProps = {
      id: 1,
      text: 'TDD 공부하기',
      isDone: false,
    };
    render(<TodoItem {...todoProps} />);
    const todoText = screen.getByText('TDD 공부하기');
    const deleteButton = screen.getByRole('button', { name: '삭제' });

    expect(todoText).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});