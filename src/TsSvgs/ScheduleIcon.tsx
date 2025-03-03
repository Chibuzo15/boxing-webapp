import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="feather feather-calendar mt-0 mr-4 mr-lg-0"
        {...props}
    >
        <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
        <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
)
export default SvgComponent
