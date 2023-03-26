import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import {TodoList} from "./TodoList"

const setup = (text: string) => render(<TodoList text={'text'} />);

describe('TodoList.tsx', () => {
    test('title is rendered', () => {
      //render komponentu
      setup("mockTest");
      //logika testu
      const title = screen.getByText("Todo List");
      //sprawdzenie testu
      expect(title.innerHTML).toEqual("Todo List");
    })
    test('textProp is rendered', () => {
        setup('mockTest2')
        const textProp = screen.getByText('mockTest2');
        expect(textProp.innerHTML).toEqual('mockTest2')
    })
    test('click me button is rendered', () => {
        render(<TodoList text='mockTest' />);
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toEqual(2);
    })
    test('click me button rendered', ()=> {
        render(<TodoList text='mockTest' />);
        const clickMebutton = screen.getByTestId('click me');
        expect(clickMebutton).toBeInTheDocument();
    })
    test('is lorem is visible after click', async () => {
        setup('mockTest')
       
        const lorem = screen.getByTestId('lorem');
         fireEvent.click(screen.getByTestId("clickMe"));
        expect(lorem).toBeInTheDocument();
    })
})
