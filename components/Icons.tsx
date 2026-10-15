type P = { size?: number }

const stroke = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const ArrowRight = ({ size = 16 }: P) => (
  <svg {...stroke(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const ArrowUpRight = ({ size = 16 }: P) => (
  <svg {...stroke(size)}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const Mail = ({ size = 18 }: P) => (
  <svg {...stroke(size)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)
export const Phone = ({ size = 18 }: P) => (
  <svg {...stroke(size)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" /></svg>
)
export const FileText = ({ size = 18 }: P) => (
  <svg {...stroke(size)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
)
export const GitHub = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
)
export const LinkedIn = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg>
)
export const LeetCode = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.48 0a1.37 1.37 0 0 0-.96.44L7.12 6.2l-2.86 3.06a5.27 5.27 0 0 0-1.24 2.17 5.5 5.5 0 0 0 .1 3.29 5.1 5.1 0 0 0 1.18 1.94l4.34 4.36a5.4 5.4 0 0 0 7.5.15l2.6-2.43a1.37 1.37 0 1 0-1.87-2l-2.61 2.43a2.65 2.65 0 0 1-3.68-.07l-4.33-4.36a2.4 2.4 0 0 1-.05-3.38l2.85-3.05 5.32-5.69A1.37 1.37 0 0 0 13.48 0Zm-2.87 13.9a1.37 1.37 0 1 0 0 2.74h9.98a1.37 1.37 0 1 0 0-2.74h-9.98Z" /></svg>
)
