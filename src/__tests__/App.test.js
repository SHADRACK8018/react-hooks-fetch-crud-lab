test("creates a new question when the form is submitted", async() => {
    // Render the app component
    render( < App / > );

    // Wait for the first question to appear in the list
    await screen.findByText(/lorem testum 1/);

    // Simulate clicking the "New Question" button to open the form
    fireEvent.click(screen.queryByText(/New Question/));

    // Fill out the form with new question data
    fireEvent.change(screen.queryByLabelText(/Prompt/), {
        target: { value: "Test Prompt" },
    });
    fireEvent.change(screen.queryByLabelText(/Answer 1/), {
        target: { value: "Test Answer 1" },
    });
    fireEvent.change(screen.queryByLabelText(/Answer 2/), {
        target: { value: "Test Answer 2" },
    });
    fireEvent.change(screen.queryByLabelText(/Answer 3/), {
        target: { value: "Test Answer 3" },
    });
    fireEvent.change(screen.queryByLabelText(/Answer 4/), {
        target: { value: "Test Answer 4" },
    });
    fireEvent.change(screen.queryByLabelText(/Correct Answer/), {
        target: { value: "1" }, // Assuming "1" corresponds to "Test Answer 1"
    });

    // Submit the form (if there's an "Add Question" button)
    fireEvent.click(screen.queryByText(/Add Question/));

    // After submitting, click the "View Questions" button
    fireEvent.click(screen.queryByText(/View Questions/));

    // Assert the new question appears in the list (Test Prompt should be there now)
    expect(await screen.findByText(/Test Prompt/)).toBeInTheDocument();
    expect(await screen.findByText(/lorem testum 1/)).toBeInTheDocument();
});