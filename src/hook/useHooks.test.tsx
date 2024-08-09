import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { useAvatar, useScreenSize, useFetchData } from "./useHooks";
import { profileEditForm } from "../common/functions/validations";

vi.mock("../common/functions/validations", () => ({
  profileEditForm: {
    safeParse: vi.fn(),
  },
}));

describe("useAvatar", () => {
  it("should set initial avatar URL correctly", () => {
    const { result } = renderHook(() => useAvatar());
    expect(result.current.userAvatar).toBe(
      "https://xsgames.co/randomusers/assets/avatars/pixel/49.jpg"
    );
  });

  it("should change avatar URL when changeAvatar is called", () => {
    const { result } = renderHook(() => useAvatar());
    act(() => {
      result.current.changeAvatar();
    });
    expect(result.current.userAvatar).toContain(
      "https://xsgames.co/randomusers/avatar.php?g=pixel&"
    );
  });
});

describe("useScreenSize", () => {
  it("should set initial screen size correctly", () => {
    const { result } = renderHook(() => useScreenSize());
    expect(result.current.width).toBe(window.innerWidth);
  });

  it("should update screen size when window is resized", () => {
    const { result } = renderHook(() => useScreenSize());
    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current.width).toBe(500);
  });
});

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