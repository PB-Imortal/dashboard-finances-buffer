import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { useFetchData } from "./useHooks";
import { profileEditForm } from "../common/functions/validations";

vi.mock("../common/functions/validations", () => ({
  profileEditForm: {
    safeParse: vi.fn(),
  },
}));

describe("useFetchData", () => {
  it("should clear errors when validation succeeds", () => {
    (profileEditForm.safeParse as jest.Mock).mockReturnValue({
      success: true,
    });

    const { result } = renderHook(() => useFetchData(), {
      wrapper: Router,
    });

    const event = {
      target: {
        id: "firstName",
        value: "John",
      },
    };

    act(() => {
      result.current.handleInputChange(event as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errors).toEqual({});
  });
});