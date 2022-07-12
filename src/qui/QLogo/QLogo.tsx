import clsx from "clsx";
import { Component } from "solid-js";
import "./QLogo.css";

export interface QLogoProps {
	class?: string;
}

export const QLogo: Component<QLogoProps> = (props) => {
	return (
		<svg
			width="190"
			height="32"
			viewBox="0 0 190 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class={clsx("q-logo", props.class)}
		>
			<path
				d="M9.04882 8.046C9.80482 8.046 10.4438 8.064 10.9658 8.1C11.5058 8.136 12.0008 8.19 12.4508 8.262C12.9008 8.334 13.3688 8.424 13.8548 8.532L13.6658 9.342C13.1618 9.27 12.6848 9.216 12.2348 9.18C11.8028 9.126 11.3348 9.09 10.8308 9.072C10.3268 9.054 9.73282 9.045 9.04882 9.045C7.60882 9.045 6.46582 9.324 5.61982 9.882C4.77382 10.422 4.16182 11.322 3.78382 12.582C3.40582 13.842 3.21682 15.543 3.21682 17.685C3.21682 19.827 3.40582 21.528 3.78382 22.788C4.16182 24.048 4.77382 24.957 5.61982 25.515C6.46582 26.055 7.60882 26.325 9.04882 26.325C10.1468 26.325 11.0738 26.298 11.8298 26.244C12.5858 26.19 13.3238 26.1 14.0438 25.974L14.2328 26.811C13.4948 26.991 12.7388 27.117 11.9648 27.189C11.1908 27.279 10.2188 27.324 9.04882 27.324C7.33882 27.324 5.97082 27.018 4.94482 26.406C3.91882 25.776 3.18082 24.759 2.73082 23.355C2.28082 21.951 2.05582 20.061 2.05582 17.685C2.05582 15.309 2.28082 13.419 2.73082 12.015C3.18082 10.611 3.91882 9.603 4.94482 8.991C5.97082 8.361 7.33882 8.046 9.04882 8.046ZM22.1185 13.662C23.8825 13.662 25.1875 13.986 26.0335 14.634C26.8975 15.264 27.3385 16.218 27.3565 17.496C27.3925 18.648 27.1945 19.53 26.7625 20.142C26.3305 20.736 25.5745 21.033 24.4945 21.033H16.9345V20.142H24.3325C25.0705 20.142 25.5835 19.908 25.8715 19.44C26.1595 18.972 26.2945 18.342 26.2765 17.55C26.2585 16.524 25.9075 15.786 25.2235 15.336C24.5575 14.868 23.5405 14.634 22.1725 14.634C21.0205 14.634 20.1025 14.814 19.4185 15.174C18.7525 15.534 18.2755 16.137 17.9875 16.983C17.6995 17.829 17.5555 18.963 17.5555 20.385C17.5555 21.897 17.7265 23.094 18.0685 23.976C18.4105 24.84 18.9415 25.452 19.6615 25.812C20.3815 26.172 21.3175 26.352 22.4695 26.352C23.3155 26.352 24.1345 26.316 24.9265 26.244C25.7185 26.172 26.3845 26.1 26.9245 26.028L27.0595 26.784C26.7535 26.892 26.3125 26.982 25.7365 27.054C25.1785 27.144 24.5935 27.207 23.9815 27.243C23.3695 27.297 22.8205 27.324 22.3345 27.324C20.9305 27.324 19.7965 27.099 18.9325 26.649C18.0685 26.181 17.4385 25.443 17.0425 24.435C16.6465 23.427 16.4485 22.095 16.4485 20.439C16.4485 18.765 16.6375 17.433 17.0155 16.443C17.3935 15.453 17.9965 14.742 18.8245 14.31C19.6705 13.878 20.7685 13.662 22.1185 13.662ZM37.8129 13.662C39.5049 13.662 40.7019 14.202 41.4039 15.282C42.1059 16.344 42.4569 18.09 42.4569 20.52C42.4569 22.176 42.2949 23.508 41.9709 24.516C41.6469 25.506 41.1339 26.226 40.4319 26.676C39.7299 27.108 38.8209 27.324 37.7049 27.324C36.8229 27.324 35.9409 27.207 35.0589 26.973C34.1769 26.721 33.2859 26.352 32.3859 25.866L32.4129 25.137C33.4569 25.533 34.3659 25.839 35.1399 26.055C35.9139 26.253 36.7149 26.352 37.5429 26.352C38.4609 26.352 39.1989 26.172 39.7569 25.812C40.3149 25.434 40.7199 24.822 40.9719 23.976C41.2239 23.112 41.3499 21.96 41.3499 20.52C41.3499 19.08 41.2239 17.928 40.9719 17.064C40.7199 16.2 40.3239 15.579 39.7839 15.201C39.2439 14.823 38.5239 14.634 37.6239 14.634C36.7959 14.634 35.9859 14.841 35.1939 15.255C34.4019 15.651 33.4749 16.29 32.4129 17.172L32.3859 16.308C32.9979 15.732 33.6009 15.246 34.1949 14.85C34.7889 14.454 35.3829 14.157 35.9769 13.959C36.5889 13.761 37.2009 13.662 37.8129 13.662ZM32.2779 13.986L32.4399 16.443L32.5209 16.605V25.488L32.4129 25.812C32.4669 26.298 32.4939 26.739 32.4939 27.135C32.5119 27.531 32.5209 27.963 32.5209 28.431V32.616H31.4409V13.986H32.2779ZM51.5392 13.851C52.8712 13.851 53.9242 13.95 54.6982 14.148C55.4902 14.346 56.0572 14.697 56.3992 15.201C56.7412 15.687 56.9122 16.398 56.9122 17.334C56.9122 18.252 56.6872 18.954 56.2372 19.44C55.8052 19.908 55.0942 20.187 54.1042 20.277V20.331C55.3282 20.421 56.1742 20.763 56.6422 21.357C57.1282 21.933 57.3712 22.743 57.3712 23.787C57.3712 24.669 57.2002 25.353 56.8582 25.839C56.5342 26.325 56.0032 26.667 55.2652 26.865C54.5272 27.063 53.5282 27.162 52.2682 27.162C51.4222 27.162 50.6932 27.153 50.0812 27.135C49.4692 27.135 48.9022 27.117 48.3802 27.081C47.8762 27.063 47.3272 27.036 46.7332 27L47.0572 26.217C47.3992 26.235 48.0292 26.253 48.9472 26.271C49.8652 26.271 50.9362 26.271 52.1602 26.271C53.1682 26.271 53.9692 26.199 54.5632 26.055C55.1752 25.911 55.6162 25.65 55.8862 25.272C56.1562 24.894 56.2912 24.345 56.2912 23.625C56.2912 22.509 55.9672 21.744 55.3192 21.33C54.6892 20.916 53.5732 20.709 51.9712 20.709H47.0302V19.899H51.9712C52.9252 19.881 53.6812 19.809 54.2392 19.683C54.8152 19.539 55.2292 19.287 55.4812 18.927C55.7332 18.567 55.8592 18.054 55.8592 17.388C55.8592 16.668 55.7152 16.128 55.4272 15.768C55.1572 15.39 54.6982 15.129 54.0502 14.985C53.4202 14.841 52.5742 14.769 51.5122 14.769C50.8102 14.751 50.1622 14.751 49.5682 14.769C48.9922 14.769 48.4882 14.778 48.0562 14.796C47.6242 14.796 47.2912 14.805 47.0572 14.823L46.7332 14.013C47.2552 13.959 47.7322 13.923 48.1642 13.905C48.6142 13.887 49.1092 13.878 49.6492 13.878C50.1892 13.86 50.8192 13.851 51.5392 13.851ZM47.7592 14.013V27H46.7332V14.013H47.7592ZM72.4056 13.986V27H71.3796V16.875C71.3796 16.623 71.3796 16.38 71.3796 16.146C71.3976 15.894 71.4066 15.642 71.4066 15.39H71.3796C71.2716 15.588 71.1456 15.795 71.0016 16.011C70.8576 16.209 70.7136 16.407 70.5696 16.605L62.4966 27H61.5516V13.986H62.5776V24.03C62.5776 24.3 62.5776 24.561 62.5776 24.813C62.5776 25.065 62.5686 25.326 62.5506 25.596H62.5776C62.7216 25.38 62.8746 25.164 63.0366 24.948C63.1986 24.714 63.3516 24.507 63.4956 24.327L71.4876 13.986H72.4056ZM82.6388 13.662C82.9808 13.662 83.3678 13.68 83.7998 13.716C84.2498 13.734 84.6998 13.779 85.1498 13.851C85.6178 13.923 86.0408 14.031 86.4188 14.175L86.2298 14.904C85.7258 14.796 85.1408 14.724 84.4748 14.688C83.8088 14.652 83.2508 14.634 82.8008 14.634C81.5768 14.634 80.5958 14.814 79.8578 15.174C79.1198 15.516 78.5798 16.11 78.2378 16.956C77.9138 17.802 77.7518 18.981 77.7518 20.493C77.7518 22.005 77.9138 23.193 78.2378 24.057C78.5798 24.903 79.1198 25.497 79.8578 25.839C80.5958 26.181 81.5768 26.352 82.8008 26.352C83.0708 26.352 83.4218 26.343 83.8538 26.325C84.2858 26.307 84.7448 26.28 85.2308 26.244C85.7168 26.19 86.1668 26.127 86.5808 26.055L86.7158 26.811C86.1038 26.955 85.4378 27.072 84.7178 27.162C84.0158 27.27 83.3228 27.324 82.6388 27.324C81.1808 27.324 80.0108 27.108 79.1288 26.676C78.2468 26.226 77.6078 25.497 77.2118 24.489C76.8338 23.481 76.6448 22.149 76.6448 20.493C76.6448 18.819 76.8338 17.487 77.2118 16.497C77.6078 15.489 78.2468 14.769 79.1288 14.337C80.0108 13.887 81.1808 13.662 82.6388 13.662Z"
				fill="black"
			/>
			<path
				d="M140.493 8.37C140.133 9.324 139.773 10.233 139.413 11.097C139.053 11.943 138.684 12.735 138.306 13.473C137.946 14.193 137.55 14.823 137.118 15.363C136.704 15.903 136.254 16.335 135.768 16.659C135.282 16.983 134.742 17.181 134.148 17.253V17.307C134.832 17.361 135.444 17.568 135.984 17.928C136.524 18.288 137.01 18.774 137.442 19.386C137.874 19.98 138.279 20.682 138.657 21.492C139.053 22.284 139.431 23.148 139.791 24.084C140.169 25.02 140.556 25.992 140.952 27H139.764C139.242 25.704 138.756 24.498 138.306 23.382C137.856 22.248 137.37 21.258 136.848 20.412C136.326 19.566 135.723 18.909 135.039 18.441C134.373 17.973 133.554 17.739 132.582 17.739L132.636 16.821C133.518 16.785 134.283 16.533 134.931 16.065C135.597 15.579 136.182 14.94 136.686 14.148C137.19 13.338 137.649 12.438 138.063 11.448C138.495 10.458 138.918 9.432 139.332 8.37H140.493ZM130.125 8.37V14.607C130.125 15.093 130.116 15.543 130.098 15.957C130.08 16.353 130.044 16.785 129.99 17.253C130.044 17.739 130.08 18.207 130.098 18.657C130.116 19.089 130.125 19.53 130.125 19.98V27H129.045V8.37H130.125ZM133.473 16.821V17.739H129.639V16.821H133.473ZM149.513 19.548C150.755 19.548 151.727 19.674 152.429 19.926C153.131 20.178 153.626 20.583 153.914 21.141C154.202 21.681 154.346 22.419 154.346 23.355C154.346 24.345 154.184 25.119 153.86 25.677C153.554 26.217 153.05 26.604 152.348 26.838C151.664 27.054 150.755 27.162 149.621 27.162C148.829 27.162 148.145 27.153 147.569 27.135C146.993 27.135 146.471 27.117 146.003 27.081C145.535 27.063 145.031 27.036 144.491 27L144.815 26.19C145.121 26.208 145.688 26.226 146.516 26.244C147.344 26.244 148.343 26.244 149.513 26.244C150.413 26.244 151.133 26.172 151.673 26.028C152.213 25.866 152.6 25.578 152.834 25.164C153.086 24.732 153.212 24.12 153.212 23.328C153.212 22.59 153.104 22.014 152.888 21.6C152.672 21.186 152.294 20.889 151.754 20.709C151.214 20.511 150.467 20.412 149.513 20.412H144.788V19.548H149.513ZM145.517 13.986V27H144.464V13.986H145.517ZM168.895 13.662C169.993 13.662 170.92 13.779 171.676 14.013C172.432 14.247 173.035 14.625 173.485 15.147C173.953 15.669 174.295 16.362 174.511 17.226C174.727 18.09 174.835 19.161 174.835 20.439C174.835 22.149 174.646 23.499 174.268 24.489C173.89 25.461 173.26 26.163 172.378 26.595C171.514 27.009 170.353 27.216 168.895 27.216C167.509 27.216 166.393 27.009 165.547 26.595C164.719 26.163 164.125 25.461 163.765 24.489C163.405 23.499 163.225 22.149 163.225 20.439C163.225 19.161 163.324 18.09 163.522 17.226C163.738 16.362 164.062 15.669 164.494 15.147C164.944 14.625 165.529 14.247 166.249 14.013C166.969 13.779 167.851 13.662 168.895 13.662ZM159.256 13.986V27H158.176V13.986H159.256ZM163.981 19.845V20.709H159.067V19.845H163.981ZM168.895 14.607C167.761 14.607 166.852 14.796 166.168 15.174C165.502 15.534 165.025 16.137 164.737 16.983C164.467 17.811 164.332 18.963 164.332 20.439C164.332 21.897 164.467 23.058 164.737 23.922C165.025 24.768 165.502 25.371 166.168 25.731C166.852 26.091 167.761 26.271 168.895 26.271C170.083 26.271 171.028 26.091 171.73 25.731C172.432 25.371 172.936 24.768 173.242 23.922C173.548 23.058 173.701 21.897 173.701 20.439C173.701 18.963 173.548 17.811 173.242 16.983C172.936 16.137 172.432 15.534 171.73 15.174C171.028 14.796 170.083 14.607 168.895 14.607Z"
				fill="black"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M107 31.7105C114.732 31.7105 121 25.5073 121 17.8553C121 10.2032 114.732 4 107 4C99.268 4 93 10.2032 93 17.8553C93 25.5073 99.268 31.7105 107 31.7105ZM111.734 10.3506C109.531 7.75221 105.616 7.41328 102.99 9.59363C100.364 11.774 100.022 15.6479 102.225 18.2464C104.428 20.8448 108.343 21.1838 110.969 19.0034C113.595 16.8231 113.938 12.9491 111.734 10.3506ZM101.288 24.2666C100.976 25.0117 100.815 25.8104 100.815 26.6169H113.229C113.229 25.8104 113.068 25.0117 112.756 24.2666C112.444 23.5214 111.987 22.8443 111.411 22.274C110.834 21.7037 110.15 21.2513 109.397 20.9426C108.644 20.634 107.837 20.4751 107.022 20.4751C106.207 20.4751 105.4 20.634 104.647 20.9426C103.894 21.2513 103.209 21.7037 102.633 22.274C102.057 22.8443 101.6 23.5214 101.288 24.2666Z"
				fill="black"
			/>
		</svg>
	);
};