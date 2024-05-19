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
        className="feather feather-search mt-0 mr-4 mr-lg-0"
        {...props}
    >
        <circle cx={11} cy={11} r={8} />
        <path d="m21 21-4.35-4.35" />
    </svg>
)
export default SvgComponent
