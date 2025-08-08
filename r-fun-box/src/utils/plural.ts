export function plural(
  count: number | undefined,
  labels: [string, string, string]
) {
  if (!count) return labels[0];

  const values = [2, 0, 1, 1, 1, 2];

  return labels[
    count % 100 > 4 && count % 100 < 20
      ? 2
      : values[count % 10 < 5 ? count % 10 : 5]
  ];
}
