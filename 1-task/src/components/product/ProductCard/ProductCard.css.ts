import { style } from "@vanilla-extract/css";

export const card = style({
	padding: "16px",
	borderRadius: "8px",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	backgroundColor: "white",
	width: "300px",
	textAlign: "center",
});

export const image = style({
	width: "100%",
	height: "auto",
	borderRadius: "4px",
});

export const title = style({
	fontSize: "18px",
	fontWeight: "bold",
	margin: "12px 0",
});

export const price = style({
	color: "#e63946",
	fontSize: "20px",
});

export const description = style({
	color: "#e63946",
	fontSize: "20px",
});

export const button = style({
	marginTop: "16px",
	padding: "10px 20px",
	backgroundColor: "#1d3557",
	color: "white",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
	":hover": {
		backgroundColor: "#457b9d",
	},
});
