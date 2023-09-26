import React from "react";
import { createRoot } from 'react-dom/client';
import MarkdownPreviewer from "./Components/MarkdownPreviewer";
import "./styles.css"


const root = createRoot(document.getElementById('root'))
root.render(<MarkdownPreviewer />)