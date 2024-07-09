const clsx = require("clsx");

const Template = (props) => {
	const { className = "pb-36 h-full", children } = props;
	return (
		<div className={clsx(className, "bg-primary")}>
			{children}
		</div>
	);
};

export default Template;
