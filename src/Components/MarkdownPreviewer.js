// @ts-nocheck
import React from "react";
import Editor from "../Components/Editor";
import Previewer from "../Components/Previewer";

export default class MarkdownPreviewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// eslint-disable-next-line no-useless-escape
			input:
				"# Welcome to my Markdown Previewer\n## This is a Sub-Heading\nIf you want to learn how to code visit [this link](https://www.freecodecamp.org).\n\n---\n### This is a HTML tag `<form></form>`\n```function(a, b) { return a + b }```\nthis is a function  to add two numbers\n\n---\n>this is a block quote\n\nYou can learn:\n*HTML\n*CSS\n*Javascript\n*Phyton\n*and many more\n\n You can:\n1.Sleep\n2.Eat\n3.**Code**\n![React Image](./src/Assets/logo192.png)",
			maximize: "h-full",
			minimize: "hidden",
			closeEditor: false,
			closePreview: false,
		};
	}

	render() {
		return (
			<div className="markdown-previewer font-['Yantramanav'] font-normal text-lg">
				<Editor
					input={this.state.input}
                    closePreview={this.state.closePreview}
                    closeEditor={this.state.closeEditor}
					markdownPreviewStateHandler={(newInput) => {
						this.setState(newInput);
					}}
					maximize={this.state.maximize}
                    minimize={this.state.minimize}
					changePreview={(preview) => {
						this.setState(preview);
					}}
				/>
				<Previewer
					input={this.state.input}
                    closePreview={this.state.closePreview}
                    closeEditor={this.state.closeEditor}
					maximize={this.state.maximize}
                    minimize={this.state.minimize}
					changePreview={(editor) => {
						this.setState(editor);
					}}
				/>
			</div>
		);
	}
}
