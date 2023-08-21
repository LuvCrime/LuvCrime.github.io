import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    LinkStyled,
} from "./styles"

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';

interface BreadcrumbsCalcProps {
    handleClick: (event: React.MouseEvent, item: string) => void;
    activeLink: string;
    breadcrumbs: string[];
}

export const BreadcrumbsCalc = ({ handleClick, activeLink, breadcrumbs }: BreadcrumbsCalcProps) => {
    const { t } = useTranslation();

    return (
        <Stack spacing={3}>
            <Breadcrumbs
                separator=""
                aria-label="breadcrumb"
            >
                {breadcrumbs.map((item, id) =>
                    <LinkStyled
                        underline={activeLink === item ? "always" : "hover"}
                        key={id}
                        color="inherit"
                        href="/"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, item)}>
                        {t(item)}
                    </LinkStyled>,
                )}
            </Breadcrumbs>
        </Stack>
    );
}