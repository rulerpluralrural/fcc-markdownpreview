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
				"# Welcome to my Markdown Previewer\n## This is a Sub-Heading<br>If you want to learn how to code visit [this link](https://www.freecodecamp.org).\n\n---\n### This is an HTML tag: `<form></form>`\n\nThis is a function  to add two numbers:\n\n```\nfunction(a, b) { return a + b }\n```\n\n---\n>this is a block quote\n\n## You can learn:\n- HTML\n- CSS\n- Javascript\n- Phyton\n- and many more\n\n## You can:\n1. Sleep\n2. Eat\n3. **Code**\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
			maximize: "h-full",
			openEditor: true,
			openPreview: true,
		};
	}

	render() {
		return (
			<div className="markdown-previewer font-['Yantramanav'] font-normal text-lg">
				{this.state.openEditor && (
					<Editor
						input={this.state.input}

						openPreview={this.state.openPreview}

						openEditor={this.state.openEditor}

						markdownPreviewStateHandler={(newInput) => {
							this.setState(newInput);
						}}

						maximize={this.state.maximize}

						togglePreview={(preview) => {
							this.setState(preview);
						}}
					/>
				)}
				{this.state.openPreview && (
					<Previewer
						input={this.state.input}

						openPreview={this.state.openPreview}

						openEditor={this.state.openEditor}

						maximize={this.state.maximize}

						toggleEditor={(editor) => {
							this.setState(editor);
						}}
					/>
				)}
			</div>
		);
	}
}
