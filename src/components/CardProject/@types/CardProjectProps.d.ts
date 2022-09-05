import React, { SetStateAction } from "react";

export interface SetPropsCardProject {
    nameProject: string;
    description: string | null | undefined;
    urlImage?: string;
    technologies?: {
        title:string
    }[]
}

export interface OpenModalStateCardProject {
    state: React.Dispatch<SetStateAction<boolean>>
}

