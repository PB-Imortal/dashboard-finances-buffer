import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useHooks } from './useHooks';

describe('useHooks', () => {
  describe('useScreenSize', () => {
    it('should return the initial screen width', () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });

      const { result } = renderHook(() => useHooks().useScreenSize());

      expect(result.current.width).toBe(1024);
    });

    it('should update screen width on resize', () => {
      const { result } = renderHook(() => useHooks().useScreenSize());

      act(() => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });
        window.dispatchEvent(new Event('resize'));
      });

      expect(result.current.width).toBe(800);
    });
  });

  describe('changeAvatar', () => {
    it('should change the user avatar', () => {
      const { result } = renderHook(() => useHooks());

      const initialAvatar = result.current.userAvatar;

      act(() => {
        result.current.changeAvatar();
      });

      expect(result.current.userAvatar).not.toBe(initialAvatar);
    });
  });

  describe('setUserAvatar', () => {
    it('should set the user avatar', () => {
      const { result } = renderHook(() => useHooks());

      const newAvatarUrl = 'https://xsgames.co/randomusers/assets/avatars/pixel/50.jpg';

      act(() => {
        result.current.setUserAvatar(newAvatarUrl);
      });

      expect(result.current.userAvatar).toBe(newAvatarUrl);
    });
  });
});