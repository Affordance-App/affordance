import { render } from "@testing-library/react";
import { Button, colors } from '../../components/Button';

describe("Button", () => {
  it("renders Button properly", () => {
    const { getByText, container } = render(<Button>Testing String</Button>);
    expect(getByText("Testing String")).toBeInTheDocument()
    expect(container.firstElementChild.className).toContain(colors.white)
  });

  it("renders Button black button properly", () => {
    const { container } = render(<Button color="black">Testing String</Button>);
    expect(container.firstElementChild.className).toContain(colors.black)
  });
});