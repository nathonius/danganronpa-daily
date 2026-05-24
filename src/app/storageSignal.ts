import { signal, WritableSignal } from '@angular/core';
import { DateTime } from 'luxon';

export function storageSignal<T>(
  key: string,
  initialValue: T,
  validationFn?: (value: unknown) => boolean,
): WritableSignal<T> {
  const state = signal<T>(initialValue);
  const existingValue = window.localStorage.getItem(key);
  if (existingValue) {
    const parsed = JSON.parse(existingValue);
    if (!validationFn || validationFn(parsed)) {
      state.set(JSON.parse(existingValue));
    }
  }

  const originalSetter = state.set;
  const storageSetter = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    originalSetter(value);
  };

  state.set = storageSetter;

  return state;
}

export function datedKey(key: string): string {
  const today = DateTime.now();
  return `${today.year}.${today.month}.${today.day}.${key}`;
}
