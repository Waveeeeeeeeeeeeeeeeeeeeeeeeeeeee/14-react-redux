import { style } from "@vanilla-extract/css";

export const productList = style({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-between",
	gap: "20px",
	margin: "0 auto",
	maxWidth: "1200px",
	padding: "20px",
});

export const productCardWrapper = style({
	flex: "1 1 calc(33.333% - 20px)",
	boxSizing: "border-box",
	maxWidth: "calc(33.333% - 20px)",
});
