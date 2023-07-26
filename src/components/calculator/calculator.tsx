import { useTranslation } from 'react-i18next';
import {
    CalculatorContainer,
    Title,
    Subtitle,
    LinkStyled,
    StyledCalculator
} from "./styles"

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


export default function CustomSeparator() {
    const { t } = useTranslation();
    
    const [activeLink, setActiveLink] = useState<number>(0);

    const breadcrumbs = [
        "business-card-site",
        "corporate-website",
        "online-store",
        "service-portal",
        "application"
    ];

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        event.preventDefault();
        const value = event.target;
        setActiveLink(index);
        console.info('You clicked a breadcrumb.', value);
    }

    return (
        <Stack spacing={2}>
            <Breadcrumbs
                separator=""
                aria-label="breadcrumb"
            >
                {breadcrumbs.map((item, id) =>
                    <LinkStyled underline={activeLink === id ? "always" : "hover"} key={id} color="inherit" href="/" onClick={(e) => handleClick(e, id)}>
                        {t(item)}
                    </LinkStyled>,
                )}
            </Breadcrumbs>
        </Stack>
    );
}

export const Calculator = () => {
    const { t } = useTranslation();

    return (
        <CalculatorContainer>
            <Title>{t('calculator')}</Title>
            <Subtitle>{t('order')}</Subtitle>
            <StyledCalculator>
                {CustomSeparator()}
            </StyledCalculator>
        </CalculatorContainer>
    )
}