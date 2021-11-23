import React from 'react';

import { GET } from "../../requests"

export const infoContext = React.createContext(GET("driver"));