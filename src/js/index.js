import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const root = createRoot(document.getElementById('fptAutoTestApp'))
root.render(<App/>)