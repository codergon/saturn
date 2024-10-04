// Truncates string (in the middle) using given length value
export function truncate(value?: string, length = 6, backLength?: number) {
  if (!value) {
    return value;
  }
  if (value?.length <= length + (backLength || length)) {
    return value;
  }

  return (
    value.substring(0, length) +
    "..." +
    value.substring(value.length - (backLength || length))
  );
}
