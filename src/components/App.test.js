import { fireEvent, render, screen, act } from "@testing-library/react";
import Reservation from "./main/reservation/Reservation";
import ReservationForm from "./main/reservation/ReservationForm";

describe("Feedback Form", () => {
  test('Render test', () => {
    render(<Reservation />);

    const dateElement = screen.getByText("Choose date");
    expect(dateElement).toBeInTheDocument();

    const timeElement = screen.getByText("Choose time");
    expect(timeElement).toBeInTheDocument();

    const guestsElement = screen.getByText("Number of guests");
    expect(guestsElement).toBeInTheDocument();

    const occasionInput = screen.getByText("Occasion");
    expect(dateElement).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  })

  test('Render test', () => {
    const testHandleSubmit = jest.fn();
    render(<Reservation onSubmit={testHandleSubmit} />);
    const dateInput = screen.getByLabelText(/Choose date/);
    const timeInput = screen.getByLabelText(/Choose time/);
    let date = "2023-09-23";
    let time = "18:00"
    fireEvent.change(dateInput, { target: { value: date } });
    expect(dateInput.value).toBe(date);
    expect(timeInput.value).toBe(time);
  })

  test("Submit", () => {
    const date = "2023-09-24";
    const time = "19:00";
    const guests = "3";
    const occasion = "Anniversary";
    const testHandleSubmit = jest.fn();
    render(<ReservationForm onSubmit={testHandleSubmit} />);

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: date } });
    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, { target: { value: time } });

    const guestInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestInput, { target: { value: guests } });

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });

    const submitButton = screen.getByRole("button");
    act(() => fireEvent.click(submitButton));

    expect(testHandleSubmit).toHaveBeenCalledWith({
      date,
      time,
      guests,
      occasion,
    });
  });
})