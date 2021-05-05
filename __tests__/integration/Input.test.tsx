import { render } from "@testing-library/react";
import { Input, InputField } from '../../components/Input';

describe("Input", () => {
    it("renders Input properly", () => {
        const { container } = render(<Input placeholder="Placeholder" />);
        expect(container.querySelector('input').placeholder).toEqual("Placeholder")
        expect(container.querySelector('input')).toBeTruthy();
        expect(container.querySelector('textarea')).toBeNull();
    });

    it("renders Input with texarea properly", () => {
        const { container } = render(<Input textarea placeholder="Placeholder" />);
        expect(container.querySelector('textarea').placeholder).toEqual("Placeholder")
        expect(container.querySelector('textarea')).toBeTruthy();
        expect(container.querySelector('input')).toBeNull();
    })
});