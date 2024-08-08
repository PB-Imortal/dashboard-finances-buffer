import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useAvatar, useScreenSize } from "./useHooks";

describe("useHooks", () => {
  describe("useScreenSize", () => {
    it("should return the initial screen width", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1024,
      });

      const { result } = renderHook(() => useScreenSize());

      expect(result.current.width).toBe(1024);
    });

    it("should update screen width on resize", () => {
      const { result } = renderHook(() => useScreenSize());

      act(() => {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: 800,
        });
        window.dispatchEvent(new Event("resize"));
      });

      expect(result.current.width).toBe(800);
    });

    it("should clean up the resize event listener on unmount", () => {
      const { unmount } = renderHook(() => useScreenSize());

      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    });
  });

  describe("useAvatar", () => {
    it("should return the initial user avatar", () => {
      const { result } = renderHook(() => useAvatar());

      expect(result.current.userAvatar).toBe(
        "https://xsgames.co/randomusers/assets/avatars/pixel/49.jpg"
      );
    });

    it("should change the user avatar", () => {
      const { result } = renderHook(() => useAvatar());

      const initialAvatar = result.current.userAvatar;

      act(() => {
        result.current.changeAvatar();
      });

      expect(result.current.userAvatar).not.toBe(initialAvatar);
    });

    it("should set the user avatar", () => {
      const { result } = renderHook(() => useAvatar());

      const newAvatarUrl =
        "https://xsgames.co/randomusers/assets/avatars/pixel/50.jpg";

      act(() => {
        result.current.setUserAvatar(newAvatarUrl);
      });

      expect(result.current.userAvatar).toBe(newAvatarUrl);
    });
  });
});