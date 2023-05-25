import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import ChatComponent from './ChatComponent';

jest.mock('axios');

test('renders chat history', async () => {
  axios.get.mockResolvedValueOnce({
    data: { messages: [{ user: "Bot", message: "Hello, user!" }] }
  });

  const { getByText } = render(<ChatComponent />);
  await waitFor(() => getByText("Bot: Hello, user!"));
});

test('sends messages', async () => {
  axios.get.mockResolvedValueOnce({ data: { messages: [] } });
  axios.post.mockResolvedValueOnce({ data: { message: "Hello, user!" } });

  const { getByText, getByPlaceholderText } = render(<ChatComponent />);
  fireEvent.change(getByPlaceholderText("Type a message..."), { target: { value: "Hello, bot!" } });
  fireEvent.click(getByText("Send"));

  await waitFor(() => getByText("You: Hello, bot!"));
  await waitFor(() => getByText("Bot: Hello, user!"));
});
